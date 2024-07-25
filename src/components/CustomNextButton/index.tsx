import React, { useRef } from 'react';
import { Pressable, Text, Animated } from 'react-native';
import styles from './styles';

interface NextButtonProps {
  onPress?: () => void;
  text: string;
  buttonStyle?: object;
  textStyle?: object;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress, text, buttonStyle, textStyle }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      if (onPress) {
        onPress();
      }
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={[styles.button, buttonStyle]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default NextButton;
