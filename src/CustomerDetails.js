import CustomerDetailsForm from './components/CustomerDetailsForm';
import TableReservationHero from './components/TableReservationHero';
import './styles/customer-details.css';

function CustomerDetails() {
  return (
    <div className='customer-details-main'>
      <TableReservationHero />
      <CustomerDetailsForm />
    </div>
  );
}

export default CustomerDetails;
