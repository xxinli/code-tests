import getProviders from "../networks";
import {TestData} from "../../../no_touching/test_data";
import Network from "../social/network";
import { Request, Response } from 'express';

/**
 * Post body
 * burger_name
 * burger_addons
 * user_id
 * @param req
 * @param res
 */

/* 
   better implement message queue here, like RabbitMQ, AWS SQS
   When a request arrives, produce a message and push it into the queue.
   Consumer picks up the message, handles tasks like sendToSocials, sendEmailNotification
*/
export default async function orderRoute(req: Request, res: Response) {
    const social_networks = getProviders();

    await Promise.all([sendToSocials(social_networks), sendEmailNotification()]);

    res.send('Order placed!');
}

function sendToSocials(providers: Network[] | null) {
    if (providers) {
        providers.forEach((item) => {
            try {
                TestData.validateAPIKey(item);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

async function sendEmailNotification() {
    await TestData.simulateSlowEmailRequest();
}

