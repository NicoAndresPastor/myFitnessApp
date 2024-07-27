import React from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import styles from './style';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
      <Icon name="arrowleft" style={styles.icon} />
    </Pressable>
  );
};
export default BackButton;
