import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

//Components
import SearchBar from './components/SearchBar';
import AddFoodButton from './components/AddFoodButton';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {selectFoods} from '../../../redux/foods/selectors.js';

const SearchFood = () => {
  const dispatch = useDispatch();
  const storeFoods = useSelector(selectFoods);
  console.log(storeFoods);

  const [term, setTerm] = useState('');

  const navigation = useNavigation();

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
        data={storeFoods}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <AddFoodButton
              text={item}
              handleButtonPress={() =>
                handleAddFood('breakfast', {
                  id: item.id,
                  name: item.name,
                  rationSize: item.rationSize,
                  rationNumber: item.rationNumber,
                  carbohydrates: item.carbohydrates,
                  fats: item.fats,
                  proteins: item.proteins,
                  brand: item.brand,
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
