import { ChangeEvent, useEffect, useState } from "react";
import { Form, Item } from "semantic-ui-react";
import axios from "axios";
import { IOrder, IOrderDisplay } from "../models/order";

function MyOrdersComponent(this: any){
    const [orders, setOrders] = useState<IOrderDisplay[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect")
        var endPnt = "http://localhost:5147/api/Order"; //"http://localhost:5000/orders";
        axios.get(endPnt).then(response => 
        {
            console.log(response.data)
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
