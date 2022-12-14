import Network from "./network";
import { Environment } from "../../common/environment";

export default class InstagramProvider extends Network  {
    constructor() {
        super();

        this.setAPIEndpoint(Environment.getINEndpoint());
        this.setAccessToken(Environment.getINToken());
        this.setAPIName('Instagram');
    }
}