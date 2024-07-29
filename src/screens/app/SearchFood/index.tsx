import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from './components/SearchBar';
import AddFoodButton from './components/AddFoodButton';
import {useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectMeals} from '../../../redux/meals/selectors.js';

const SearchFood = () => {
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const handleAddFood = foodname => {
    navigation.navigate('DiarioStack');
  };
  const storeMeals = useSelector(selectMeals);
  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('search init')}
      />
      <FlatList
        data={storeMeals}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          console.log({item});
          return (
            <AddFoodButton
              text={item}
              handleButtonPress={() => handleAddFood(item.name)}
            />
          );
        }}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchFood;
