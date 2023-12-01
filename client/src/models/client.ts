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