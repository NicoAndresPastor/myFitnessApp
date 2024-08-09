import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

function NextButton({ handleButtonPress, text, buttonStyle, textStyle }) {
  return (
    <Pressable
      style={[styles.button, buttonStyle]}
      onPress={handleButtonPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
}

export default NextButton;
