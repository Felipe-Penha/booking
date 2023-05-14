import Hero from './components/Hero';
import HomeMain from './components/HomeMain';
import HomeMainFilter from './components/HomeMainFilter';
import HomeMealsList from './components/HomeMealsList';

function Home() {
  return (
    <>
      <Hero />
      <HomeMain>
        <HomeMainFilter />
        <HomeMealsList />
      </HomeMain>
    </>
  );
}

export default Home;
