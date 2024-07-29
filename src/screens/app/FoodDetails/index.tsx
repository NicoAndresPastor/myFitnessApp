import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import PieChartButton from '../../../components/PieChart';
import styles from './styles';

const FoodDetails = () => {
  const data = [
    {key: 1, amount: 72, svg: {fill: '#4CAF50'}}, // Carbohidratos
    {key: 2, amount: 16, svg: {fill: '#FFC107'}}, // Grasas
    {key: 3, amount: 12, svg: {fill: '#FF5722'}}, // Proteínas
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Avena Instantánea</Text>
      <Text style={styles.subtitle}>Quaker</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tamaño de la ración</Text>
          <Text style={styles.infoValue}>40 g (1/2 taza)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Número de raciones</Text>
          <Text style={styles.infoValue}>2</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tiempo</Text>
          <Text style={styles.infoValue}>Desayuno</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.calories}>314 cal</Text>
        <PieChartButton style={styles.pieChart} />
        <View style={styles.macroInfo}>
          <Text style={styles.macroText}>72% 63 g Carbohidratos</Text>
          <Text style={styles.macroText}>16% 6.4 g Grasas</Text>
          <Text style={styles.macroText}>12% 10.4 g Proteínas</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetails;
