import { View, Text, Image } from "react-native";
import styles from "./styles";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../../../redux/goals/actions"; 
import { selectCaloricGoal } from "../../../../redux/goals/selectors"; 
import BackButton from "../../../../components/BackButton";
import NextButton from "../../../../components/CustomNextButton";
import CustomObjetiveButton from "../../../../components/CustomObjetiveButton";


const PersonalGoals = () => {
    const dispatch = useDispatch();

    // Replace local state with Redux selector
    const selectedGoal = useSelector(selectCaloricGoal); // This assumes that caloricGoal reflects the selected goal

    const handleButtonPress = (buttonId) => {
        dispatch(updateUserData({ selectedGoal: buttonId })); // Dispatch action to update the selected goal
    };

    const getButtonStyle = (buttonId) => 
        selectedGoal === buttonId ? styles.buttonTargetStyleSelected : styles.buttonTargetStyle;

    const getTextStyle = (buttonId) => 
        selectedGoal === buttonId ? styles.buttonTargetTextSelected : styles.buttonTargetText;

    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <BackButton />
            </View>
            <View style={styles.container1}> 
                <Text style={styles.title}>Personal Goals</Text>
                <Image source={require('../../../../images/HealthyMeal.png')} style={styles.image} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.subtitle}>Choose your goal</Text>

                <CustomObjetiveButton
                    text="Lose weight"
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

            <NextButton 
                text="Next" 
                buttonStyle={styles.nextButton} 
                textStyle={styles.buttonText} 
                handleButtonPress={() => console.log('Next button pressed')}  
            />
        </View>
    );
};



export default PersonalGoals;
