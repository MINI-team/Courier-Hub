import {createContext, useContext} from "react";
import InquiryStore from "./inquiryStore";

interface Store {
    inquiryStore: InquiryStore
}

export const store: Store = {
    inquiryStore: new InquiryStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}