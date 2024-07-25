import {View, Text, FlatList} from 'react-native';
import Pressable from '../../../../../components/PressableOpacity';
import React from 'react';
import styles from './styles';

const MealBox = ({
  meal = '',
  calories = '',
  foods = [{name: '', amount: ''}],
  onAddFood = () => {},
}) => {
  return (
    <View style={styles.mealContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.mealText}>{meal}</Text>
        <Text style={styles.caloriesText}>{calories}</Text>
      </View>
      {foods.map(item => (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.foodText}>{item.name}</Text>
          <Text style={styles.foodText}>{item.amount}</Text>
        </View>
      ))}
      <Pressable onPress={onAddFood}>
        <Text style={styles.addFoodText}>AGREGAR ALIMENTO</Text>
      </Pressable>
    </View>
  );
};

export default MealBox;
