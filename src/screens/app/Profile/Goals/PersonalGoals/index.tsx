import { View, Text, Image } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import BackButton from "../../../../../components/BackButton";
import NextButton from "../../../../../components/CustomNextButton";
import { useNavigation } from "@react-navigation/native";
import CustomObjetiveButton from "../../../../../components/CustomObjetiveButton";

const PersonalGoals = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState('loseWeight');  // Set default selected button

    const handleButtonPress = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const getButtonStyle = (buttonId) => 
        selectedButton === buttonId ? styles.buttonTargetStyleSelected : styles.buttonTargetStyle;

    const getTextStyle = (buttonId) => 
        selectedButton === buttonId ? styles.buttonTargetTextSelected : styles.buttonTargetText;

    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <BackButton />
            </View>
            <View style={styles.container1}> 
                <Text style={styles.title}>Personal Goals</Text>
                <Image source={require('../../../../../images/HealthyMeal.png')} style={styles.image} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.subtitle}>Choose your goal</Text>

                <CustomObjetiveButton
                    text="Lose weight "
                    buttonStyle={getButtonStyle('loseWeight')}
                    textStyle={getTextStyle('loseWeight')}
                    onPress={() => handleButtonPress('loseWeight')}
                />
                <CustomObjetiveButton
                    text="Gain Muscle"
                    buttonStyle={getButtonStyle('gainMuscle')}
                    textStyle={getTextStyle('gainMuscle')}
                    onPress={() => handleButtonPress('gainMuscle')}
                />
                <CustomObjetiveButton
                    text="Maintain weight"
                    buttonStyle={getButtonStyle('maintainWeight')}
                    textStyle={getTextStyle('maintainWeight')}
                    onPress={() => handleButtonPress('maintainWeight')}
                />
            </View>

            <NextButton text="Next" buttonStyle={styles.nextButton} textStyle={styles.buttonText} handleButtonPress={() => navigation.navigate('PersonalGoalsWeightTime')} />
        </View>
    );
};

export default PersonalGoals;
