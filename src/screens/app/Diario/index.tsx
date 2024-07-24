import {View, Text, FlatList} from 'react-native';
import CaloriesBox from './components/CaloriesBox.tsx';
import CalendarButton from './components/CalendarButton/index.tsx';
import TestChart from './components/PieChartButton/index.tsx';
import MealBox from './components/MealBox/index.tsx';
import styles from './styles.tsx';
import {useNavigation} from '@react-navigation/native';

const Diario = ({route}) => {
  const foodname = route.params;
  console.log(foodname);
  const foods = [
    {name: 'Avena', amount: '80', brand: 'Quaker'},
    {name: 'Huevo', amount: '100', brand: 'Huevo'},
    {name: 'Harina Integral', amount: '60', brand: 'El Molino'},
    {name: 'Banana', amount: '100', brand: 'Banana'},
    {name: 'Zanahoria', amount: '110', brand: 'Zanahoria'},
    {name: 'Manzana', amount: '80', brand: 'Manzana'},
  ];
  const meals = [
    {meal: 'Desayuno', foods: foods, calories: '200'},
    {meal: 'Almuerzo', foods: foods, calories: '500'},
    {meal: 'Cena', foods: foods, calories: '600'},
    {meal: 'Colaciones', foods: foods, calories: '400'},
  ];
  const navigation = useNavigation();
  const handleAddFood = () => {
    navigation.navigate('SearchFood');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headercontainer}>
        <CalendarButton />
        <TestChart />
      </View>
      <View style={styles.calorieSummarycontainer}>
        <CaloriesBox calories="nro" text="Objetivo" />
        <CaloriesBox
          text="-"
          containerStyle={{width: 20}}
          showcalories={false}
        />
        <CaloriesBox calories="nro" text="Alimentos" />
        <CaloriesBox
          text="="
          containerStyle={{width: 20}}
          showcalories={false}
        />
        <CaloriesBox calories="nro" text="Restantes" />
      </View>

      <FlatList
        data={meals}
        keyExtractor={item => item.meal}
        renderItem={({item}) => {
          return (
            <MealBox
              meal={item.meal}
              calories={item.calories}
              foods={item.foods}
              onAddFood={() => handleAddFood()}
            />
          );
        }}
      />
    </View>
  );
};

export default Diario;
