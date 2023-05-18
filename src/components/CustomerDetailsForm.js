import '../styles/customer-details.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CustomerDetailsForm() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [pNumber, setPNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  return (
    <section className='customer-container'>
      <h2 className='customer-title'>Sign in to collect points</h2>
      <form className='customer-form'>
        <input
          placeholder='First name'
          name='fName'
          id='fName'
          className='fName'
          type='text'
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        {fName.length > 2 ? null : <p className='required'>* Required</p>}
        <input
          placeholder='Last name'
          name='lName'
          id='lName'
          className='lName'
          type='text'
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
        {lName.length > 2 ? null : <p className='required'>* Required</p>}
        <input
          placeholder='Phone number'
          name='pNumber'
          id='pNumber'
          className='pNumber'
          type='tel'
          value={pNumber}
          onChange={(e) => setPNumber(e.target.value)}
          required
        />
        {pNumber ? null : <p className='required'>* Required</p>}
        <input
          placeholder='Email'
          name='email'
          id='email'
          className='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {email ? null : <p className='required'>* Required</p>}
        <input
          placeholder='Password'
          name='password'
          id='password'
          className='password'
          type='password'
          value={password}
          onChange={(e) => setPasword(e.target.value)}
          required
        />
        {password ? null : <p className='required'>* Required</p>}
        <textarea
          placeholder='Add a special request (optional)'
          name='comment'
          id='comment'
          className='comment'
        />

        <Link
          className='table-form-button'
          to={
            fName && lName && pNumber && email && password
              ? '/payment'
              : '/customer-details'
          }
        >
          Continue
        </Link>
      </form>
    </section>
  );
}

export default CustomerDetailsForm;
