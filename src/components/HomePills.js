function HomePills() {
  const pills = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials'];

  const pillsMap = pills.map((pill, index) => {
    return (
      <span key={pill} className={`pill pill-${index}`}>
        {pill}
      </span>
    );
  });

  return (
    <div className='pills-container'>
      <h2 className='pills-section-title'>Order for delivery</h2>
      <div className='pills'>{pillsMap}</div>
    </div>
  );
}

export default HomePills;
