import {TouchableOpacity, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CustomIconButton = () => {
  return (
    <View>
      <Text>
        Soy un Icon Button
        <AntDesign name="home" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default CustomIconButton;
