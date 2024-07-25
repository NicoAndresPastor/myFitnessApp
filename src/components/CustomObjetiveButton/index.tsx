import React, { useRef, useState } from 'react';
import { Pressable, Text, Animated, Dimensions } from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

interface NextButtonProps {
  onPress?: () => void;
  text: string;
  buttonStyle?: object;
  textStyle?: object;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress, text, buttonStyle, textStyle }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
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
        style={[
          styles.button,
          isPressed ? styles.buttonPressed : styles.button,
          buttonStyle,
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default NextButton;
