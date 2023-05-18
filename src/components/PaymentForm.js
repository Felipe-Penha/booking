import { useState } from 'react';

function PaymentForm() {
  const [cNumber, setCNumber] = useState('');
  const [fLName, setFLName] = useState('');
  const [eDate, setEDate] = useState('');
  const [cDate, setCDate] = useState('');

  function handleSubmit(e) {
    if (cNumber && fLName.length > 0 && eDate && cDate) e.prevent.default();
  }

  return (
    <section className='payment-form-container'>
      <h2 className='payment-title'>Credit card details</h2>
      <form className='payment-form' onSubmit={handleSubmit}>
        <input
          placeholder='Card number'
          type='number'
          name='cNumber'
          id='cNumber'
          className='cNumber'
          value={cNumber}
          onChange={(e) => setCNumber(e.target.value)}
          required
        />
        {cNumber ? null : <p className='required'>* Required</p>}
        <input
          placeholder='First Name - Last Name'
          type='text'
          name='fLName'
          id='fLName'
          className='fLName'
          value={fLName}
          onChange={(e) => setFLName(e.target.value)}
          required
        />
        {fLName ? null : <p className='required'>* Required</p>}
        <div className='exp-cvv'>
          <div className='exp-cvv-item'>
            <label className='exp-cvv-label'>Exp date</label>
            <input
              placeholder='MM - YYYY'
              type='text'
              name='eDate'
              id='eDate'
              className='eDate'
              value={eDate}
              onChange={(e) => setEDate(e.target.value)}
              required
            />
            {eDate ? null : <p className='required'>* Required</p>}
          </div>
          <div className='exp-cvv-item'>
            <label className='exp-cvv-label'>CVV</label>
            <input
              type='text'
              name='cDate'
              id='cDate'
              className='cDate'
              value={cDate}
              onChange={(e) => setCDate(e.target.value)}
              required
            />
            {cDate ? null : <p className='required'>* Required</p>}
          </div>
        </div>

        <button type='submit' className='table-form-button'>
          Book
        </button>
      </form>
    </section>
  );
}

export default PaymentForm;
