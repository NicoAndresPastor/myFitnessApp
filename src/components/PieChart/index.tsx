import React from 'react';
import PieChart from 'react-native-pie-chart';
import styles from './styles';

import {View} from 'react-native';

const PieCharButton = ({style = {}}) => {
  const widthAndHeight = 70;
  const series = [123, 321, 123];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100'];

  return (
    <View style={[styles.container, style]}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.5}
        coverFill={'#FFF'}
      />
    </View>
  );
};

export default PieCharButton;
