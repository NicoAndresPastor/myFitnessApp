import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

//Components
import SearchBar from './components/SearchBar';
import AddFoodButton from './components/AddFoodButton';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {selectFoods} from '../../../redux/foods/selectors.js';
import {selectMeals} from '../../../redux/meals/selectors.js';

const SearchFood = ({route, navigation}) => {
  const dispatch = useDispatch();
  const storeFoods = useSelector(selectFoods);
  const storeMeals = useSelector(selectMeals);
  const {currentMeal} = route.params;
  const filteredFoods = storeFoods.filter(
    food =>
      !storeMeals[currentMeal].some(
        existingFood => existingFood.id === food.id,
      ),
  );
  const [term, setTerm] = useState('');

  const handleAddFood = (meal = '', foods = {}) => {
    dispatch({type: 'meals/ADD_FOOD', payload: {meal, foods}});
    navigation.navigate('DiarioStack');
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
              handleButtonPress={() =>
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
            />
          );
        }}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchFood;
