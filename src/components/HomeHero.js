import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <section className='home-hero'>
      <div className='heading'>
        <h1 className='heading-h1'>Little Lemon</h1>
        <h2 className='heading-h2'>Chicago</h2>
      </div>
      <p className='hero-description'>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <Link to='/table-reservation' className='hero-cta'>
        Reserve a table
      </Link>
    </section>
  );
}

export default HomeHero;
