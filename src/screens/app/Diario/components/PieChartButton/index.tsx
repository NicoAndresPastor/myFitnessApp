import Pressable from '../../../../../components/PressableOpacity';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const PieCharButton = () => {
  return (
    <Pressable style={styles.chartpieButton}>
      <Icon name="piechart" style={styles.chartpieIcon} />
    </Pressable>
  );
};

export default PieCharButton;
