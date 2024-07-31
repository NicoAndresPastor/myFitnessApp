import {View, Text} from 'react-native';
import styles from './styles.tsx';
import CaloriesBox from './CaloriesBox.tsx';
import {useSelector} from 'react-redux';
import {selectMeals} from '../../../../../redux/meals/selectors.js';
import {useEffect, useState} from 'react';

const CaloriesSummary = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const storeMeals = useSelector(selectMeals);
  const calculateTotalCalories = storeMeals => {
    const calculateCaloriesForMeal = storeMeals => {
      return storeMeals.reduce(
        (total, food) => total + (food.calories || 0),
        0,
      );
    };

    const breakfastCalories = calculateCaloriesForMeal(storeMeals.breakfast);
    const lunchCalories = calculateCaloriesForMeal(storeMeals.lunch);
    const collationCalories = calculateCaloriesForMeal(storeMeals.collation);
    const dinnerCalories = calculateCaloriesForMeal(storeMeals.dinner);

    const totalCalories =
      breakfastCalories + lunchCalories + collationCalories + dinnerCalories;

    return totalCalories;
  };
  useEffect(() => {
    setTotalCalories(calculateTotalCalories(storeMeals));
  }, [storeMeals]);
  return (
    <View style={styles.container}>
      <CaloriesBox calories="nro" text="Objetivo" />
      <CaloriesBox text="-" containerStyle={{width: 20}} showcalories={false} />
      <CaloriesBox calories={`${totalCalories}`} text="Alimentos" />
      <CaloriesBox text="=" containerStyle={{width: 20}} showcalories={false} />
      <CaloriesBox calories="nro" text="Restantes" />
    </View>
  );
};

export default CaloriesSummary;
