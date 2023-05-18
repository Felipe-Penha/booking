import './styles/table-reservation.css';
import TableReservationHero from './components/TableReservationHero';
import TableReservationForm from './components/TableReservationForm';

function TableReservation() {
  return (
    <div className='table-reservation-container'>
      <TableReservationHero />
      <TableReservationForm />
    </div>
  );
}

export default TableReservation;
