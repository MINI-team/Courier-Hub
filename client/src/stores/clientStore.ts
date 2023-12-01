import agent from "../api/agent";
import { Client, ClientFormValues } from "../models/client";
import {makeAutoObservable, runInAction} from "mobx";
import { store } from "./store";
//import {useHistory} from "react-router-dom";

export default class ClientStore{
    client: Client | null = null;
    
    constructor() {
        makeAutoObservable(this);
    }
    
    get isLoggedIn(){
        return !!this.client;
    }

    login = async(creds: ClientFormValues) => {
        const client = await agent.Account.login(creds);
        store.commonStore.setToken(client.token);
        runInAction(() => this.client = client);
        console.log('Logged in!');
        console.log(client);
        //routing
        //history.push('/form');
    }
    
    /*register = async(creds: ClientFormValues) =>{
        const client = await agent.Account.register(creds);
        store.commonStore.setToken(client.token);
        runInAction(()=> this.client =client);
        //routing
        console.log('Logged in!');
        console.log(client);
    }*/
    
    logout =()=>{
        store.commonStore.setToken(null);
        this.client = null;
        // na udemy tu jest routing ale nwm
        console.log('logged out!');
    }
    
    getClient = async()=>{
        try{
            const client = await agent.Account.current();
            runInAction(()=> this.client = client);
        } catch(error){
            console.log(error);
        }
    }
}