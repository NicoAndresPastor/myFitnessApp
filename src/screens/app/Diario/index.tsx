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
  const handleFoodDetails = () => {
    navigation.navigate('FoodDetails');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headercontainer}>
        <CalendarButton />
        <PieChart
          widthAndHeight={70}
          series={[50, 10, 40]}
          sliceColor={['#00A9FF', '#87C4FF', '#CDF5FD']}
          coverRadius={0.5}
          coverFill={'#FFF'}
        />
      </View>
      <CaloriesSummary />
      <ScrollView>
        <MealBox
          meal="Desayuno"
          foods={storeMeals.breakfast}
          onAddFood={() => handleAddFood('breakfast')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Almuerzo"
          foods={storeMeals.lunch}
          onAddFood={() => handleAddFood('lunch')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Cena"
          foods={storeMeals.dinner}
          onAddFood={() => handleAddFood('dinner')}
          onFoodDetails={handleFoodDetails}
        />
        <MealBox
          meal="Colaciones"
          foods={storeMeals.collation}
          onAddFood={() => handleAddFood('collation')}
          onFoodDetails={handleFoodDetails}
        />
      </ScrollView>
    </View>
  );
};

export default Diario;
