import {View, Text} from 'react-native';
import styles from './styles.tsx';
import CaloriesBox from './CaloriesBox.tsx';

const CaloriesSummary = () => {
  return (
    <View style={styles.container}>
      <CaloriesBox calories="nro" text="Objetivo" />
      <CaloriesBox text="-" containerStyle={{width: 20}} showcalories={false} />
      <CaloriesBox calories="nro" text="Alimentos" />
      <CaloriesBox text="=" containerStyle={{width: 20}} showcalories={false} />
      <CaloriesBox calories="nro" text="Restantes" />
    </View>
  );
};

export default CaloriesSummary;
