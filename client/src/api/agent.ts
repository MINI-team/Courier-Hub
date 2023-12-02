import axios, {AxiosResponse} from "axios";
import { Client, ClientFormValues } from "../models/client";
import { IOrder, IOrderDisplay } from "../models/order";
import { IInquiry } from "../models/inquiry";

axios.defaults.baseURL = 'http://localhost:5147/api';

const responseBody = <T>(response: AxiosResponse<T>)=> response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Account = {
    current:() => requests.get<Client>('/account'),
    login: (client: ClientFormValues) => requests.post<Client>('/account/login', client),
    //register: (client: ClientFormValues) => requests.post<Client>('/account/register', client),
}

const Orders = {
    post: (order: IOrder) => requests.post<IOrder>('/Order', order),
    get: () => requests.get<IOrderDisplay []>('/Order')
}

const Inquiries = {
    get: () => requests.get<IInquiry []>('inquiries')
}

const agent = {
    Account,
    Orders,
    Inquiries // not yet used
}

export default agent;