import '../styles/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <div className='hamburguer-container'>
        <div className='hamburguer-bar'></div>
        <div className='hamburguer-bar'></div>
        <div className='hamburguer-bar'></div>
      </div>
      <Link to='/'>
        <img src='Logo.png' className='logo' alt='Little Lemon logo' />
      </Link>
      <img src='Cart.svg' className='cart' alt='Shopping cart icon' />
    </nav>
  );
}

export default Nav;
