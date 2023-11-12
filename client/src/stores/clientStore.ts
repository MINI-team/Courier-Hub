import {makeAutoObservable, runInAction} from "mobx";
import {Client, ClientFormValues} from "../models/client";
import agent from "../api/agent";
import { store } from "./store";

export default class ClientStore{
    client: Client | null = null;
    constructor() {
        makeAutoObservable(this);
    }
    
    get isLoggedIn(){
        return !!this.client;
    }
    
    login = async (creds: ClientFormValues) => {
        try{
            await agent.Account.login(client);
            const newActivity = new Activity(activity);
            // navigate to another page
        } catch (error){
            console.log(error);
            throw error;
        }
    }


    logout = () => {
        store.commonStore.setToken(null);
        //localStorage.removeItem('jwt');
        this.client = null;
        // route
    }
    
    getClient = async() => {
        try {
            const client = await agent.Account.current();
            runInAction(() => this.client = client);
        } catch (error){
            console.log(error);
        }
    }
}