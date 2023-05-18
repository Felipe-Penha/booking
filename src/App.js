import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Home';
import TableReservation from './TableReservation';
import CustomerDetails from './CustomerDetails';
import Payment from './Payment';

function App() {
  document.title = 'Little Lemon';
  return (
    <div className='App'>
      <Nav />
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
