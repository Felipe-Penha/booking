import '../styles/home-meals-list.css';

function HomeMealsList() {
  const meals = [
    {
      id: 1,
      meal: 'Greek Sald',
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

  const mealsList = meals.map(({ id, meal, description, price }) => {
    return (
      <div key={id} className={`meal-${id} meals-container`}>
        <h2 className={`meal-${id}-h2 meal-h2`}>{meal}</h2>
        <p className={`meal-${id}-description meal-description`}>
          {description}
        </p>
        <p className={`meal-${id}-price meal-price`}>{price}</p>
      </div>
    );
  });

  return <div className='meals'>{mealsList}</div>;
}

export default HomeMealsList;
