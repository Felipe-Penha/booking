import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Home';
import TableReservation from './TableReservation';
import CustomerDetails from './CustomerDetails';
import Payment from './Payment';

function App() {
  document.title = 'Little Lemon';
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/table-reservation' element={<TableReservation />}></Route>
        <Route path='/customer-details' element={<CustomerDetails />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
