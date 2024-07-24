import React from 'react';
import styles from './styles';
import PieChart from 'react-native-pie-chart';
import Pressable from '../../../../../components/PressableOpacity';

const PieCharButton = () => {
  const widthAndHeight = 60;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];
  return (
    <Pressable styles={styles.container}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverFill={'#FFF'}
      />
    </Pressable>
  );
};

export default PieCharButton;
