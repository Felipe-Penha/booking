import { Link } from 'react-router-dom';
import '../styles/hero.css';

function Hero() {
  return (
    <header className='hero-header'>
      <div className='hero-text'>
        <div className='hero-text-title-group'>
          <h1 className='hero-text-title'>Little Lemon</h1>
          <h2 className='hero-text-subtitle'>Chicago</h2>
        </div>
        <p className='hero-text-description'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to='/table-reservation' className='hero-text-cta'>
          Reserve a table
        </Link>
      </div>
    </header>
  );
}

export default Hero;
