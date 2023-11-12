import { createContext, useContext } from "react";
import ClientStore from "./clientStore";
import CommonStore from "./commonStore";

interface Store{
    clientStore: ClientStore,
    commonStore: CommonStore
}

export const store: Store = {
    clientStore: new ClientStore(),
    commonStore: new CommonStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}