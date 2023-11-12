import { IAddress } from "./address";

export interface IClient{
    firstName?: string;
    lastName?: string;
    email?: string;
    login?: string;
    password?: string;
    address?: IAddress;
}