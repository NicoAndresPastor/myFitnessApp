import {ScrollView, View} from 'react-native';
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
  const handleAddFood = meal => {
    navigation.navigate('SearchFood', {CurrentMeal: meal});
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
      <ScrollView>
        <MealBox
          meal="Desayuno"
          foods={storeMeals.breakfastfoods}
          onAddFood={() => handleAddFood('breakfast')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Almuerzo"
          foods={storeMeals.lunchfoods}
          onAddFood={() => handleAddFood('lunch')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Cena"
          foods={storeMeals.dinnerfoods}
          onAddFood={() => handleAddFood('dinner')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Colaciones"
          foods={storeMeals.collationfoods}
          onAddFood={() => handleAddFood('collation')}
          onFoodDetails={handleFoodDetails}
        />
      </ScrollView>
    </View>
  );
};

export default Diario;
