import {View, Text} from 'react-native';
import styles from './styles';
import PressableOpacity from '../../../../../components/PressableOpacity';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddFoodButton = ({
  text = {name: '', amount: '', brand: ''},
  buttonContainerStyle = {},
  textStyle = {},
  handleButtonPress = () => {},
}) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{text.name}</Text>
        <Text style={styles.subtitle}>
          {text.amount} , {text.brand}
        </Text>
      </View>
      <PressableOpacity onPress={() => handleButtonPress()}>
        <Icon name="add-circle-outline" size={30} color="#4CAF50" />
      </PressableOpacity>
    </View>
  );
};

export default AddFoodButton;
