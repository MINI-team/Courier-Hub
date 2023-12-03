import { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import { IOrderDisplay } from "../models/order";
import agent from "../api/agent";
import { useStore } from "../stores/store";

function MyOrdersComponent(this: any){
    const [orders, setOrders] = useState<IOrderDisplay[]>([]);
    const [loaded, setLoaded] = useState(false);

    const {commonStore, clientStore} = useStore();
    useEffect(() => {
        if(commonStore.token) {
            console.log("getClient")
            clientStore.getClient();
            console.log('commonStore.token is ' + commonStore.token)
        }

        console.log("useEffect")
        console.log(`Token is ` + clientStore.client?.token!)
        // agent.Orders.get("wrong token").then(response => {
        agent.Orders.get(clientStore.client?.token!).then(response => {
            console.log(response)
            setOrders(response);
            setLoaded(true);
        });

    }, [commonStore, clientStore]);

    useEffect(() => {
        
    }, []);

    return(
        <div style={{paddingLeft: '5%'}}>
            <Item.Group divided>
                {loaded && orders.map(order =>(
                    <Item key={order.id}>
                        <Item.Content>
                            <Item.Header>{order.companyName}   {order.price?.toFixed(2)} zł</Item.Header>
                            <Item.Description>
                                <div>{order!.inquiry!.width}x{order!.inquiry!.height} cm</div>
                                <div>{order!.inquiry!.weight} g</div>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </div>
    )
}

export default MyOrdersComponent;
