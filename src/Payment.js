import { useDebugValue } from 'react';
import './styles/payment.css';
import './styles/table-reservation.css';
import TableReservationHero from './components/TableReservationHero';
import PaymentForm from './components/PaymentForm';

function Payment() {
  return (
    <div className='payment-page'>
      <TableReservationHero />
      <PaymentForm />
    </div>
  );
}

export default Payment;
