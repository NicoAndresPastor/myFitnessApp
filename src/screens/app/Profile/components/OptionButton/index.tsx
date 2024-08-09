import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'; 
import styles from "./style";


const OptionButton = ({
  text = '',
  buttonContainerStyle = {},
  textStyle = {},
  handleButtonPress = () => {},
  iconName = '',
  color = '#aaa', 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, buttonContainerStyle]} 
      onPress={handleButtonPress}
    >
      {iconName ? (
        <Icon name={iconName} size={25} color={color} marginRight={3} /> 
      ) : null}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <View style={styles.arrowContainer}>
        <Icon name={"arrowright"} size={25} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default OptionButton;
