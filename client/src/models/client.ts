//import { IAddress } from "./address";

export interface Client{
    firstName: string;
    lastName: string;
    //login: string;
    email: string;
    //token: string;
    //displayName: string;
    /*address: IAddress;
    sourceAddress: IAddress;*/
}

export class ClientFormValues{
    firstName: string= '';
    lastName: string= '';
    email: string = '';
    constructor(client?: ClientFormValues) {
        if (client) {
            this.firstName = client.firstName;
            this.lastName = client.lastName;
            this.email = client.email;
        }
    }
}

export class Client implements Client {
    constructor(init?: ClientFormValues) {
        Object.assign(this, init);
    }
}