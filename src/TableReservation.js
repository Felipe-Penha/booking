import TableReservationForm from './components/TableReservationForm';
import TableReservationHero from './components/TableReservationHero';
import './styles/table-reservation.css';

function TableReservation() {
  return (
    <div className='table-reservation'>
      <TableReservationHero />
      <TableReservationForm />
    </div>
  );
}

export default TableReservation;
