import {View, Text, FlatList} from 'react-native';
import CaloriesSummary from './components/CaloriesSummary/index.tsx';
import CalendarButton from './components/CalendarButton/index.tsx';
import PieCharButton from '../../../components/PieChart/index.tsx';
import MealBox from './components/MealBox/index.tsx';
import styles from './styles.tsx';
import {useNavigation} from '@react-navigation/native';

const foods = [
  {name: 'zanahoria', amount: '1'},
  {name: 'harina integral', amount: '100'},
  {name: 'pan', amount: '1'},
  {name: 'agua', amount: '600'},
];

const Diario = () => {
  const navigation = useNavigation();
  const handleAddFood = () => {
    navigation.navigate('SearchFood');
  };
  const handleFoodDetails = () => {
    navigation.navigate('FoodDetails');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headercontainer}>
        <CalendarButton />
        <PieCharButton />
      </View>
      <CaloriesSummary />
      <MealBox
        meal="Desayuno"
        calories="600"
        foods={foods}
        onAddFood={handleAddFood}
        onFoodDetails={handleFoodDetails}
      />
    </View>
  );
};

export default Diario;
