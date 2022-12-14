import Network from "./network";
import { Environment } from "../../common/environment";

export default class FacebookProvider extends Network {
    constructor() {
        super();

        this.setAPIEndpoint(Environment.getFBEndpoint());
        this.setAccessToken(Environment.getFBToken());
        this.setAPIName('Facebook');
    }
}