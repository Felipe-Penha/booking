function PaymentForm() {
  return (
    <main className='payment-main'>
      <form className='payment-form'>
        <label className='booking-details-label'>Booking details</label>
        <select className='booking-details-select'>
          <option>Some value</option>
        </select>
        <label className='credit-card-details'>Credit Card details</label>
        <input
          type='number'
          className='credit-card-number'
          placeholder='Card Number'
        />
        <input
          type='text'
          className='credit-card-name'
          placeholder='First Name / Last Name'
        />
        <div className='exp-cvv-container'>
          <div className='exp-cvv-item'>
            <label className='exp-cvv-label'>Exp Date</label>
            <input
              type='number'
              className='credit-card-exp'
              placeholder='MMYYYY'
            />
          </div>
          <div className='exp-cvv-item'>
            <label className='exp-cvv-label'>CVV</label>
            <input type='number' className='credit-card-cvv' />
          </div>
        </div>
        <div className='radio-group'>
          <div className='radio-item'>
            <label htmlFor='booking-text' className='payment-radio'>
              Send me booking confirmation via text
            </label>
            <input type='radio' id='booking-text' name='booking-text' />
          </div>
          <div className='radio-item'>
            <label htmlFor='booking-email' className='payment-radio'>
              Send me booking confirmation via email
            </label>
            <input type='radio' id='booking-email' name='booking-text' />
          </div>
        </div>
        <button className='payment-submit-button'>Book</button>
      </form>
    </main>
  );
}

export default PaymentForm;
