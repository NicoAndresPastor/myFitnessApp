import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Asegúrate de que el nombre del ícono sea el correcto
import styles from './style'; // Asegúrate de que la ruta sea correcta

const CheckWithText = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheck}>
      <Icon 
        name={isChecked ? "checksquare" : "minussquare"} 
        style={[styles.icon, isChecked ? styles.checkedIcon : styles.uncheckedIcon]} 
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CheckWithText;
