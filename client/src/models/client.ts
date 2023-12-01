// import { IAddress } from "./address";

// export interface IClient{ // old
//     firstName?: string;
//     lastName?: string;
//     email?: string;
//     login?: string;
//     password?: string;
//     address?: IAddress;
// }

export interface Client{
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}

export interface ClientFormValues{
    firstName?: string;
    lastName?: string;
    email?: string;
    sub: string;
}