import Network from "./network";
import { Environment } from "../../common/environment";

export default class TwitterProvider extends Network {
    constructor() {
        super();

        this.setAPIEndpoint(Environment.getTWEndpoint());
        this.setAccessToken(Environment.getTWToken());
        this.setAPIName('Twitter');
    }
}