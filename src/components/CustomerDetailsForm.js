import { Link } from 'react-router-dom';

function CustomerDetailsForm() {
  return (
    <main className='customer-details-main'>
      <h2 className='customer-details-form-title'>Sign in to collect points</h2>
      <form className='customer-details-form'>
        <input
          type='text'
          placeholder='First name'
          className='customer-input first-name'
        />
        <input
          type='text'
          placeholder='Last name'
          className='customer-input last-name'
        />
        <input
          type='number'
          placeholder='Phone number'
          className='customer-input phone-number'
        />
        <input
          type='email'
          placeholder='Email'
          className='customer-input email'
        />
        <input
          type='password'
          placeholder='Password'
          className='customer-input password'
        />
        <textarea className='customer-textarea customer-input' />
      </form>
      <button className='customer-submit-button'>
        <Link to='/payment'>Continue</Link>
      </button>
    </main>
  );
}

export default CustomerDetailsForm;
