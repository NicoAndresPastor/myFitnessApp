import {View, Text, FlatList} from 'react-native';
import Pressable from '../../../../../components/PressableOpacity';
import React, {useState} from 'react';
import styles from './styles';

const MealBox = ({
  meal = '',
  calories = '',
  foods = [{name: '', amount: ''}],
  onAddFood = () => {},
}) => {
  const calculateTotalCalories = (foods = [{name: '', amount: 0}]) => {
    const totalCalories = foods.reduce((total, food) => {
      return total + food.amount;
    }, 0);
    return totalCalories;
  };
  const [value, setValue] = useState('0');
  return (
    <View style={styles.mealContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.mealText}>{meal}</Text>
        <Text style={styles.caloriesText}>{calories}</Text>
      </View>
      <FlatList
        data={foods}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.foodText}>{item.name}</Text>
              <Text style={styles.foodText}>{item.amount}</Text>
            </View>
          );
        }}
      />
      <Pressable onPress={onAddFood}>
        <Text style={styles.addFoodText}>AGREGAR ALIMENTO</Text>
      </Pressable>
    </View>
  );
};

export default MealBox;
