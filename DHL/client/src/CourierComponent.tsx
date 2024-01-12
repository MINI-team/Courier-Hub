import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import { IOrder } from './models/order'

function CourierComponent() {
  const [orders, setOrders] = useState([])

  function getOrders() {
    axios.get('http://localhost:5001/api/GetOrdersCourier/11')
    .then(response => {
      setOrders(response.data);
      console.log(response.data)
      // console.log("request")
    })
  }

  useEffect( () => {
    getOrders();
  }, [])

  const handleTake = (orderId: number) => {
    axios.post(`http://localhost:5001/api/TakeOrder/${orderId}`, {
        "courierId": 11
    })
    .then(_response => {
      getOrders();
    });
  };

  return (
    <>
      <ul>
        {orders.map((order: IOrder) => (
          <li key={order.id}>
            {order.destinationAddress.streetName} {order.weight} g
            <div className="action-buttons">
              {order.status == 1 ? 
                (<>
                  <button className="Accept" onClick={() => handleTake(order.id!)}>Take</button>
                </>)
                : 
                <button className="Rejected" disabled>Other Action</button>
              }
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourierComponent
