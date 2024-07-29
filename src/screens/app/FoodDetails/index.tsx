import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import PieChartButton from '../../../components/PieChart';
import styles from './styles';

const FoodDetails = () => {
  const [servingSize, setServingSize] = useState('40 g (1/2 taza)');
  const [servings, setServings] = useState('2');
  const [meal, setMeal] = useState('Desayuno');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avena Instantánea</Text>
      <Text style={styles.subtitle}>Quaker</Text>

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
        <Text style={styles.calories}>314 cal</Text>
        <PieChartButton />
        <View style={{justifyContent: 'space-between'}}>
          <Text style={styles.macroText}>72% 63 g Carbohidratos</Text>
          <Text style={styles.macroText}>16% 6.4 g Grasas</Text>
          <Text style={styles.macroText}>12% 10.4 g Proteínas</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;
