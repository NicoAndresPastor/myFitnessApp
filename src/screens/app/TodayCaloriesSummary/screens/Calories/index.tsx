import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PieChartSummary from '../../components/PieChart';
import PieChart from 'react-native-pie-chart';
import styles from '../styles';

const Calories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={300}
          series={[1, 1, 1, 1]}
          sliceColor={['#00A9FF', '#87C4FF', '#CDF5FD', '#FFEED9']}
          coverRadius={0.75}
          coverFill={'#FFF'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.referenceContainer}>
          <View style={styles.foodContainer}>
            <View
              style={[
                styles.colorReference,
                {backgroundColor: '#00A9FF'},
              ]}></View>
            <Text>Breakfast</Text>
          </View>

          <View style={styles.foodContainer}>
            <View
              style={[
                styles.colorReference,
                {backgroundColor: '#00A9FF'},
              ]}></View>
            <Text>Dinner</Text>
          </View>
        </View>
        <View style={styles.referenceContainer}>
          <View style={styles.foodContainer}>
            <View
              style={[
                styles.colorReference,
                {backgroundColor: '#00A9FF'},
              ]}></View>
            <Text>Lunch</Text>
          </View>
          <View style={styles.foodContainer}>
            <View
              style={[
                styles.colorReference,
                {backgroundColor: '#00A9FF'},
              ]}></View>
            <Text>Collation</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calories;
