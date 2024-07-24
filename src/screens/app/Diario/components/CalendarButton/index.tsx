import {Text} from 'react-native';
import Pressable from '../../../../../components/PressableOpacity';
import styles from './styles';

const CalendarButton = () => {
  return (
    <Pressable style={styles.calendarButton}>
      <Text style={styles.calendarText}>Hoy</Text>
    </Pressable>
  );
};

export default CalendarButton;
