import {View, Text} from 'react-native';
import styles from './styles.tsx';
import {useEffect, useState} from 'react';

//Components
import CaloriesBox from './CaloriesBox.tsx';

//Redux
import {useSelector} from 'react-redux';
import {selectMealsCalories} from '../../../../../redux/meals/selectors.js';

const CaloriesSummary = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const storeMealsCalories = useSelector(selectMealsCalories);
  const calculateTotalCalories = storeMealsCalories => {
    return (
      storeMealsCalories.breakfast +
      storeMealsCalories.lunch +
      storeMealsCalories.collation +
      storeMealsCalories.dinner
    );
  };
  useEffect(() => {
    setTotalCalories(calculateTotalCalories(storeMealsCalories));
  }, [storeMealsCalories]);
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
