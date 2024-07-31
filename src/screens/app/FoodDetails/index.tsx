import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import PieChart from 'react-native-pie-chart';
import styles from './styles';
import CTAButton from '../../../components/CTAButton';

const FoodDetails = ({route}) => {
  const {foodDetails, mealName, showAcceptButton} = route.params;
  const [servingSize, setServingSize] = useState(`${foodDetails.rationSize}`);
  const [servings, setServings] = useState(`${foodDetails.rationNumber}`);
  const [meal, setMeal] = useState(`${mealName}`);
  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
      <View>
        <Text style={styles.title}>{foodDetails.name}</Text>
        <Text style={styles.subtitle}>{foodDetails.brand}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Tamaño de la ración</Text>
            <TextInput
              style={styles.infoValue}
              value={servingSize}
              onChangeText={setServingSize}
            />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Número de raciones</Text>
            <TextInput
              style={styles.infoValue}
              value={servings}
              onChangeText={setServings}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Comida</Text>
            <TextInput
              style={styles.infoValue}
              value={meal}
              onChangeText={setMeal}
            />
          </View>
        </View>

        <View style={[styles.chartContainer, {flexDirection: 'row'}]}>
          <PieChart
            widthAndHeight={70}
            series={[
              foodDetails.carbohydrates,
              foodDetails.fats,
              foodDetails.proteins,
            ]}
            sliceColor={['#00A9FF', '#87C4FF', '#CDF5FD']}
            coverRadius={0.5}
            coverFill={'#FFF'}
          />
          <Text style={styles.calories}>{foodDetails.calories} cal</Text>
          <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.macroText}>
              {foodDetails.carbohydrates} g Carbohidratos
            </Text>
            <Text style={styles.macroText}>
              {foodDetails.proteins} g Proteinas
            </Text>
            <Text style={styles.macroText}>{foodDetails.fats} g Grasas</Text>
          </View>
        </View>
      </View>
      {showAcceptButton ? (
        <CTAButton
          text="Accept"
          buttonContainerStyle={{alignSelf: 'flex-end', magin: 20}}></CTAButton>
      ) : null}
    </View>
  );
};

export default FoodDetails;
