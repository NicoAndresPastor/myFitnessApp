import {View, Text, FlatList} from 'react-native';
import CaloriesSummary from './components/CaloriesSummary/index.tsx';
import CalendarButton from './components/CalendarButton/index.tsx';
import PieCharButton from './components/PieChartButton/index.tsx';
import MealBox from './components/MealBox/index.tsx';
import styles from './styles.tsx';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectMeals} from '../../../redux/meals/selectors.js';

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
  const storeMeals = useSelector(selectMeals);
  return (
    <View style={{flex: 1}}>
      <View style={styles.headercontainer}>
        <CalendarButton />
        <PieCharButton />
      </View>
      <CaloriesSummary />
      <MealBox meal="Desayuno" calories="600" foods={foods} />
    </View>
  );
};

export default Diario;
