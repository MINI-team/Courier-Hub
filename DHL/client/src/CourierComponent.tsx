import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import { IOrder } from './models/order'

function CourierComponent() {
  const [orders, setOrders] = useState([])

  function getOrders() {
    console.log("getOrders")
    axios.get('http://localhost:5001/api/GetOrdersCourier/11')
    .then(response => {
      setOrders(response.data);
      console.log(response.data)
      console.log("request")
    })
  }

  useEffect( () => {
    getOrders();
    // const intervalId = setInterval(getOrders, 1000);
    // return () => clearInterval(intervalId);
  }, [])

  const handleTake = (orderId: number) => {
    axios.post(`http://localhost:5001/api/TakeOrder/${orderId}`, {
        "courierId": 11
    })
    .then(_response => {
      getOrders();
    });
  };

  const handlePickup = (orderId: number) => {
    axios.post(`http://localhost:5001/api/PickupOrder/${orderId}`, {
        "courierId": 11
    })
    .then(_response => {
      getOrders();
    });
  };

  const handleDeliver = (orderId: number) => {
    axios.post(`http://localhost:5001/api/DeliverOrder/${orderId}`, {
        "courierId": 11
    })
    .then(_response => {
      getOrders();
    });
  };

  const handleCannotDeliver = (orderId: number) => {
    axios.post(`http://localhost:5001/api/CannotDeliverOrder/${orderId}`, {
        "courierId": 11
    })
    .then(_response => {
      getOrders();
    });
  };

  function renderButtons(order: IOrder)
  {
    switch(order.status){
      case 1:
        return <button className="Accept" onClick={() => handleTake(order.id!)}>Take</button>
      case 3:
        return <>
            <button className="Accept" onClick={() => handlePickup(order.id!)}>Pickup</button>
            <button className="Reject" onClick={() => handleCannotDeliver(order.id!)}>Cannot deliver</button>
          </>
      case 4:
          return <>
            <button className="Accept" onClick={() => handleDeliver(order.id!)}>Deliver</button>
            <button className="Reject" onClick={() => handleCannotDeliver(order.id!)}>Cannot deliver</button>
          </>
    }
  }

  return (
    <>
      <ul>
        {orders.map((order: IOrder) => (
          <li key={order.id}>
            {order.destinationAddress.streetName} {order.weight} g
            <div className="action-buttons">
              {renderButtons(order)}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourierComponent
