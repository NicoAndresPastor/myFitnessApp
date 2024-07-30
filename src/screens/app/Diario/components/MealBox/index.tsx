import {View, Text, FlatList} from 'react-native';
import Pressable from '../../../../../components/PressableOpacity';
import React, {useEffect, useState} from 'react';
import styles from './styles';

const MealBox = ({meal = '', foods, onAddFood, onFoodDetails = () => {}}) => {
  const [calories, setCalories] = useState(0);
  // Recalcular las calorías totales cuando cambie el array foods
  useEffect(() => {
    const totalCalories = foods.reduce(
      (sum, item) => sum + (item.calories || 0),
      0,
    );
    setCalories(totalCalories);
  }, [foods]);
  return (
    <View style={styles.mealContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.mealText}>{meal}</Text>
        <Text style={styles.caloriesText}>{calories}</Text>
      </View>
      {foods.map(item => (
        <Pressable
          key={item.id}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}
          onPress={onFoodDetails}>
          <Text style={styles.foodText}>{item.name}</Text>
          <Text style={styles.foodText}>{item.calories}</Text>
        </Pressable>
      ))}
      <Pressable onPress={onAddFood}>
        <Text style={styles.addFoodText}>AGREGAR ALIMENTO</Text>
      </Pressable>
    </View>
  );
};

export default MealBox;
