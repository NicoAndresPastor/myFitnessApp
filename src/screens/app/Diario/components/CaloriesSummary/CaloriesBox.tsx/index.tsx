import {View, Text} from 'react-native';
import styles from './styles';

const CaloriesBox = ({
  calories = '',
  text = '',
  containerStyle = {},
  showcalories = true,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showcalories && (
        <Text style={[styles.text, {fontWeight: 'black'}]}>{calories}</Text>
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CaloriesBox;
