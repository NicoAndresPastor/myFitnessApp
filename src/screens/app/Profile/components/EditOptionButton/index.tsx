import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./style";

const EditOptionButton = (
  {
    buttonContainerStyle = {},
    textStyle = {},
    title = '',
    initialText = '',
    onSave,
    validate
  }
) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handlePress = () => {
    setIsEditing(true);
  };

  const handleTextChange = (newText) => {
    setText(newText);
    setIsValid(validate ? validate(newText) : true); // Validar el texto
  };

  const handleBlur = () => {
    if (isValid) {
      setIsEditing(false);
      onSave(text); // Llamar a la función de guardar pasando el nuevo texto si es válido
    }
  };

  return (
    <View style={[styles.container, buttonContainerStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {isEditing || !isValid ? (
        <TextInput
          style={[
            styles.text,
            textStyle,
            { borderColor: isValid ? 'white' : '#ff5e5e', borderWidth: 0.5 }
          ]}
          value={text}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <Pressable onPress={handlePress}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default EditOptionButton;
