import './styles/home.css';
import HomeHero from './components/HomeHero';
import HomePills from './components/HomePills';
import HomeMealsList from './components/HomeMealsList';

function Home() {
  return (
    <div className='home-page'>
      <HomeHero />
      <HomePills />
      <HomeMealsList />
    </div>
  );
}

export default Home;
