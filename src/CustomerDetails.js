import { Link } from 'react-router-dom';
import './styles/table-reservation.css';
import './styles/customer-details.css';
import TableReservationHero from './components/TableReservationHero';
import CustomerDetailsForm from './components/CustomerDetailsForm';

function CustomerDetails() {
  return (
    <div className='customer-details-page'>
      <TableReservationHero />
      <CustomerDetailsForm />
    </div>
  );
}

export default CustomerDetails;
