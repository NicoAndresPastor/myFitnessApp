import {View} from 'react-native';
import styles from './styles.tsx';

//Components
import CaloriesSummary from './components/CaloriesSummary/index.tsx';
import CalendarButton from './components/CalendarButton/index.tsx';
import PieCharButton from '../../../components/PieChart/index.tsx';
import MealBox from './components/MealBox/index.tsx';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Redux
import {useSelector} from 'react-redux';
import {selectMeals} from '../../../redux/meals/selectors.js';

const Diario = () => {
  const navigation = useNavigation();
  const storeMeals = useSelector(selectMeals);
  console.log(storeMeals);
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
        foods={storeMeals.breakfastfoods}
        onAddFood={handleAddFood}
        onFoodDetails={handleFoodDetails}
      />
    </View>
  );
};

export default Diario;
