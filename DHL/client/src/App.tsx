import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import OfficeWorkerComponent from './OfficeWorkerComponent';
import CourierComponent from './CourierComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/OfficeWorker" Component={OfficeWorkerComponent} />
        <Route path="/Courier" Component={CourierComponent} />
      </Routes>
    </Router>
  )
}

export default App
