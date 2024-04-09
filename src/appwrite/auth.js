import conf from '../config/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                // return this.login({email, password});
                console.log("user registered successfully");
                console.log("userAccount ")
                console.log(userAccount);
            } else {
               return  userAccount;
            }
        } catch (error) {
            console.log("Appwrite serive :: createUser :: error", error)
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const loggedIn = await this.account.createEmailPasswordSession(email, password);
            return loggedIn;
        } catch (error) {
            console.log("Appwrite serive :: login :: error", error)
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService