import '../styles/home-main-filter.css';

function HomeMainFilter() {
  const filterPill = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials'];

  return (
    <div className='pills'>
      {filterPill.map((pill) => {
        return (
          <div className={`${pill}-pill pill`} key={pill}>
            <p>{pill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomeMainFilter;
