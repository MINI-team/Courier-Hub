import { ChangeEvent, useEffect, useState } from "react";
import { Form, Item } from "semantic-ui-react";
import axios from "axios";
import { IOrder } from "../models/order";

function MyOrdersComponent(this: any){
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/orders").then(response => 
        {
            setOrders(response.data);
            setLoaded(true);
        });
    }, []);

    return(
        <div style={{paddingLeft: '5%'}}>
            <Item.Group divided>
                {orders.map(order =>(
                    <Item key={order.id}>
                        <Item.Content>
                            <Item.Header>{order.companyName}   {order.price?.toFixed(2)} zł</Item.Header>
                            <Item.Description>
                                <div>{order.width}x{order.height} cm</div>
                                <div>{order.weight} g</div>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </div>
    )
}

export default MyOrdersComponent;
