import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import { IOrder } from './models/order'

function App() {
  const [orders, setOrders] = useState([])

  function getOrders() {
    axios.get('http://localhost:5001/api/GetOrdersOfficeWorker')
    .then(response => {
      setOrders(response.data);
      console.log(response.data)
      // console.log("request")
    })
  }

  useEffect( () => {
    getOrders();
  }, [])

  const handleAccept = (orderId: number) => {
    axios.post(`http://localhost:5001/api/AcceptOrder/${orderId}`)
    .then(_response => {
      getOrders();
    });
  };

  const handleReject = (orderId: number) => {
    axios.post(`http://localhost:5001/api/RejectOrder/${orderId}`)
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
              {order.status == 0 ? 
                (<>
                  <button className="Accept" onClick={() => handleAccept(order.id!)}>Accept</button>
                  <button className="Reject" onClick={() => handleReject(order.id!)}>Reject</button>
                </>)
                : 
                <button className="Rejected" disabled>Rejected</button>
              }
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
