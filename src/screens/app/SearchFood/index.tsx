import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from './components/SearchBar';
import AddFoodButton from './components/AddFoodButton';
import {useNavigation} from '@react-navigation/native';

const SearchFood = () => {
  const [term, setTerm] = useState('');

  const navigation = useNavigation();
  const handleAddFood = foodname => {
    navigation.navigate('DiarioStack', {food: foodname});
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('search init')}
      />
      <FlatList
        data={foods}
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
