import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

function NavBar() {
  return (
    <header className='nav-header'>
      <nav className='nav-bar'>
        <ul className='nav-ul'>
          <li className='nav-li hamburger-menu'>
            <div className='hamburguer-bar'></div>
            <div className='hamburguer-bar'></div>
            <div className='hamburguer-bar'></div>
          </li>
          <li className='nav-li logo'>
            <Link to='/'>
              <img
                src='Logo.png'
                className='nav-logo'
                alt='Little Lemon Logo'
              />
            </Link>
          </li>
          <li className='nav-li cart'>
            <img src='Cart.svg' className='nav-cart' alt='Cart icon' />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
