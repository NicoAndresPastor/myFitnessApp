import {ScrollView, View} from 'react-native';
import styles from './styles.tsx';

//Components
import CaloriesSummary from './components/CaloriesSummary/index.tsx';
import CalendarButton from './components/CalendarButton/index.tsx';
import PieChart from 'react-native-pie-chart';
import MealBox from './components/MealBox/index.tsx';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Redux
import {useSelector} from 'react-redux';
import {selectMeals} from '../../../redux/meals/selectors.js';

const Diario = () => {
  const navigation = useNavigation();
  const storeMeals = useSelector(selectMeals);
  const handleAddFood = meal => {
    navigation.navigate('SearchFood', {currentMeal: meal});
  };
  const handleFoodDetails = (item, meal) => {
    navigation.navigate('FoodDetails', {
      foodDetails: item,
      mealName: meal,
      showAcceptButton: false,
    });
  };
  const getSeries = () => {
    if (
      storeMeals.breakfast.calories === 0 &&
      storeMeals.lunch.calories === 0 &&
      storeMeals.dinner.calories === 0 &&
      storeMeals.collation.calories === 0
    ) {
      return [1, 0, 0, 0];
    } else {
      return [
        storeMeals.breakfast.calories,
        storeMeals.lunch.calories,
        storeMeals.dinner.calories,
        storeMeals.collation.calories,
      ];
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headercontainer}>
        <CalendarButton />
        <PieChart
          widthAndHeight={70}
          series={getSeries()}
          sliceColor={['#00A9FF', '#87C4FF', '#CDF5FD', '#FFEED9']}
          coverRadius={0.5}
          coverFill={'#FFF'}
        />
      </View>
      <CaloriesSummary />
      <ScrollView>
        <MealBox
          meal="Desayuno"
          foods={storeMeals.breakfast.foods}
          onAddFood={() => handleAddFood('breakfast')}
          onFoodDetails={handleFoodDetails}
          mealname="breakfast"
        />
        <MealBox
          meal="Almuerzo"
          foods={storeMeals.lunch.foods}
          onAddFood={() => handleAddFood('lunch')}
          onFoodDetails={handleFoodDetails}
          mealname="lunch"
        />
        <MealBox
          meal="Cena"
          foods={storeMeals.dinner.foods}
          onAddFood={() => handleAddFood('dinner')}
          onFoodDetails={handleFoodDetails}
          mealname="dinner"
        />
        <MealBox
          meal="Colaciones"
          foods={storeMeals.collation.foods}
          onAddFood={() => handleAddFood('collation')}
          onFoodDetails={handleFoodDetails}
          mealname="collation"
        />
      </ScrollView>
    </View>
  );
};

export default Diario;
