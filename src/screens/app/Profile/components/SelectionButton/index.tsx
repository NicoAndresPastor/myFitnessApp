import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const SelectionButton = ({
  title = '',
  initialText = '',
  options = [],
  buttonContainerStyle = {},
  textStyle = {},
  handleButtonPress = () => {},
}) => {
  const [selectedOption, setSelectedOption] = useState(initialText);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    handleButtonPress(option);
  };

  return (
    <View style={[styles.container, buttonContainerStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
    <View style={styles.optionContainer}>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => handleOptionPress(option)}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </Pressable>
      ))}
      </View>
    </View>
  );
};

export default SelectionButton;
