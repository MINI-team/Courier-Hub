import axios, { AxiosResponse } from "axios";
import {Client, ClientFormValues} from "../models/client";
import { store } from "../stores/store";


/*const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}*/

axios.defaults.baseURL = "http://localhost:5147"; // lub po prostu "/api"

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
})


const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => {
        console.log("I'm in agent - request with url:" + url);
        axios.post<T>("http://localhost:5147" + url, body).then(responseBody)},
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}


const Account = {
    current: () => requests.get<Client>('/account'),
    login: (client: ClientFormValues) => requests.post<Client>('/Account/login', client),
    register: (client: ClientFormValues) => {
        console.log("I'm in agent - Account")
        requests.post<Client>('/account/register', client)}
}



const agent = {
    Account
}

export default agent;