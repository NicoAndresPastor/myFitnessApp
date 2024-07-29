import React, {Component} from 'react';
import {View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import styles from './styles';
import Pressable from '../../../../../components/PressableOpacity';

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 70;
    const series = [123, 321, 123];
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100'];

    return (
      <Pressable style={styles.container}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.5}
          coverFill={'#FFF'}
        />
      </Pressable>
    );
  }
}
