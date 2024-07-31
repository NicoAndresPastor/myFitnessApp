import React from 'react';
import PieChart from 'react-native-pie-chart';
import styles from './styles';

import {View} from 'react-native';

const CustomPieChart = ({
  series = [123, 321, 123],
  sliceColor = ['#fbd203', '#ffb300', '#ff9100'],
  widthAndHeight = 70,
  style = {},
  coverRadius = 0.5,
  coverFill = '#FFF',
}) => {
  return (
    <View style={[styles.container, style]}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={coverRadius}
        coverFill={coverFill}
      />
    </View>
  );
};

export default PieChart;
