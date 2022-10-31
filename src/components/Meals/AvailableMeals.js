import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "링티",
    description: "효과적인 수분섭취를 위한 보충제",
    price: 2000,
  },
  {
    id: "m2",
    name: "밀크세라마이드 콜라겐",
    description: "10,000mg 고함량 콜라겐 드링크",
    price: 1600,
  },
  {
    id: "m3",
    name: "하이드로웨이 단백질보충제",
    description: "초코 프로틴",
    price: 3000,
  },
  {
    id: "m4",
    name: "그릴드 닭가슴살",
    description: "초-간편 오븐 통살 닭가슴살",
    price: 4000,
  },
];

const AvailableMeals = () => {
  //   const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
