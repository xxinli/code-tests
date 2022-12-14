import {TestData} from "../../no_touching/test_data";
import crypto from 'crypto';

export default class UserModel {
    private readonly salt: string;
    protected username: string;
    protected password: string;
    protected email: string;
    protected firstName: string;
    protected lastName: string;

    // user password should be encrypted. Hashed value is stored and passed around.
    constructor(username: string, password: any, email: string, firstName: string, lastName: string) {
        this.salt = crypto.randomBytes(32).toString('hex');
        this.username = username;
        this.password = crypto.pbkdf2Sync(TestData.x(password), this.salt,  
            1000, 64, `sha512`).toString(`hex`);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getUser() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}