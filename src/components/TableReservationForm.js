import { Link } from 'react-router-dom';
import '../styles/table-reservation-form.css';

function TableReservationForm() {
  return (
    <main className='table-reservation-main'>
      <div className='table-reservation-img'>
        <img src='hero-2.png' />
      </div>

      <h2 className='table-reservation-form-title'>
        Find a table for any occasion
      </h2>

      <form className='table-reservation-form'>
        <div className='table-reservation-date-time-picker'>
          <input
            type='date'
            placeholder='Date'
            id='date-picker'
            name='date-picker'
          />
          <input
            type='time'
            placeholder='Time'
            id='time-picker'
            name='time-picker'
          />
        </div>
        <input
          placeholder='Number of Diners'
          type='number'
          id='n-diners'
          name='n-diners'
        />

        <select className='occasion' placeholder='Occasion'>
          <option>Lunch</option>
          <option>Breakfast</option>
          <option>Diner</option>
        </select>

        <label className='radio-label'>Seating options</label>
        <div className='radio-buttons-1'>
          <input
            type='radio'
            className='seating-radio'
            value='standard'
            id='standard'
            name='outside'
          />
          <label className='standard' htmlFor='standard'>
            Standard
          </label>
        </div>

        <div className='radio-buttons-2'>
          <input
            type='radio'
            className='seating-radio'
            value='outside'
            id='outside'
            name='outside'
          />
          <label className='outside' htmlFor='outside'>
            Outside
          </label>
        </div>

        <Link className='a-btn' to='/customer-details'>
          <button type='submit' className='table-reservation-submit-button'>
            Lets go
          </button>
        </Link>
      </form>
    </main>
  );
}

export default TableReservationForm;
