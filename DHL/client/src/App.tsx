import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { IOrder } from './models/order'

function App() {
  const [count, setCount] = useState(0)
  const [orders, setOrders] = useState([])

  useEffect( () => {
    axios.get('http://localhost:5001/api/GetOrdersOfficeWorker')
      .then(response => {
        setOrders(response.data);
        console.log(response.data)
        // console.log("request")
      })
  }, [])

  return (
    <>
      <div>
        <ul>
          {orders.map((order: any) => (
            <li key={order.id}>
              {order.date}  {order.weight} g
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
