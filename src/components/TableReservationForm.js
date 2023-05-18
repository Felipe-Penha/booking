import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TableReservationForm() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [nDiners, setnDiners] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [sOptions, setsOptions] = useState('Outside');
  const [required, setRequired] = useState(false);

  return (
    <section className='table-form-container'>
      <img src='/hero-2.png' className='table-img' />
      <h2 className='table-form-title'>Find a table for any occasion</h2>
      <form className='table-form'>
        <div className='date-time'>
          <div className='date-time-item'>
            <label htmlFor='date' className='date-time-label'>
              Date
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='date'
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {date ? null : <p className='required'>* Required</p>}
          </div>
          <div className='date-time-item'>
            <label htmlFor='time' className='date-time-label'>
              Time
            </label>
            <input
              type='time'
              name='time'
              id='time'
              className='time'
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {time ? null : <p className='required'>* Required</p>}
          </div>
        </div>
        <input
          placeholder='Number of Diners'
          type='number'
          name='nDiners'
          id='nDiners'
          className='nDiners'
          required
          value={nDiners}
          onChange={(e) => setnDiners(e.target.value)}
        />
        {nDiners > 0 ? null : <p className='required'>* Required</p>}
        <label htmlFor='occasion' className='occasion-label'>
          Occasion
        </label>
        <select
          name='occasion'
          id='occasion'
          className='occasion'
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>

        <label className='seating-label'>Seating options</label>

        <select
          className='seating-options'
          name='sOptions'
          id='sOptions'
          required
          value={sOptions}
          onChange={(e) => setsOptions(e.target.value)}
        >
          <option>Standard</option>
          <option>Outside</option>
        </select>

        <Link
          className='table-form-button'
          to={
            date && time && nDiners && occasion && sOptions
              ? '/customer-details'
              : '/table-reservation'
          }
        >
          Lets Go
        </Link>
      </form>
    </section>
  );
}

export default TableReservationForm;
