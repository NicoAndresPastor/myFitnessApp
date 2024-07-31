import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

//Components
import SearchBar from './components/SearchBar';
import AddFoodButton from './components/AddFoodButton';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {selectFoods} from '../../../redux/foods/selectors.js';
import {selectMeals} from '../../../redux/meals/selectors.js';
import FoodDetails from '../FoodDetails/index.js';

const SearchFood = ({route, navigation}) => {
  const dispatch = useDispatch();
  const storeFoods = useSelector(selectFoods);
  const storeMeals = useSelector(selectMeals);
  const {currentMeal} = route.params;
  const filteredFoods = storeFoods.filter(
    food =>
      !storeMeals[currentMeal].foods.some(
        existingFood => existingFood.id === food.id,
      ),
  );
  const [term, setTerm] = useState('');
  const handleAddFood = (meal = '', food = {}) => {
    const calories = food.calories;
    dispatch({type: 'meals/ADD_FOOD', payload: {meal, food, calories}});
    navigation.goBack();
  };
  const handleFoodDetails = (food = {}) => {
    navigation.navigate('FoodDetails', {
      foodDetails: food,
      mealName: currentMeal,
      showAcceptButton: true,
    });
  };
  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('search init')}
      />
      <FlatList
        data={filteredFoods}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <AddFoodButton
              text={item}
              handleAddFoodButton={() =>
                handleAddFood(currentMeal, {
                  id: item.id,
                  name: item.name,
                  rationSize: item.rationSize,
                  rationNumber: item.rationNumber,
                  carbohydrates: item.carbohydrates,
                  fats: item.fats,
                  proteins: item.proteins,
                  brand: item.brand,
                  calories: item.calories,
                })
              }
              handleFoodDetailsButton={() => handleFoodDetails(item)}
            />
          );
        }}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchFood;
