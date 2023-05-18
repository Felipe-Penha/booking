function HomeMealsList() {
  const meals = [
    {
      id: 1,
      meal: 'Greek Salad',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$ 12.99',
    },
    {
      id: 2,
      meal: 'Brushetta',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
      price: '$ 7.99',
    },
    {
      id: 3,
      meal: 'Grilled Fish',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
      price: '$ 20.00',
    },
    {
      id: 4,
      meal: 'Pasta',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
      price: '$ 18.99',
    },
    {
      id: 5,
      meal: 'Lemon Dessert',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
      price: '$ 6.99',
    },
  ];

  const mealsMap = meals.map(({ id, meal, description, price }) => {
    return (
      <div className='meal-container'>
        <h2 className={`meal meal-${id}`}>{meal}</h2>
        <p className={`description description-${id}`}>{description}</p>
        <p className={`price price-${id}`}>{price}</p>
      </div>
    );
  });

  return <div className='meals-list'>{mealsMap}</div>;
}

export default HomeMealsList;
