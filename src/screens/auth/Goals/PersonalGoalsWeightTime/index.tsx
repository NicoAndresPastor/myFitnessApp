import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from './styles'
import BackButton from "../../../../components/BackButton";
import NextButton from "../../../../components/CustomNextButton";
import { useNavigation } from "@react-navigation/native";
import CustomObjetiveButton from "../../../../components/CustomObjetiveButton";

const weightOptions = Array.from({ length: 121 }, (_, i) => (i + 40).toFixed(0)); 

const PersonalGoalsWeightTime = () => {
    const navigation = useNavigation();
    const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]); 
    const [selectedIdealWeight, setSelectedIdealWeight] = useState(weightOptions[0]); 
    const [selectedGoal, setSelectedGoal] = useState(null); 

    const handleWeightChange = (itemValue) => {
        setSelectedWeight(itemValue);
    };

    const handleIdealWeightChange = (itemValue) => {
        setSelectedIdealWeight(itemValue);
    };

    const handleButtonPress = (buttonId) => {
        setSelectedGoal(buttonId);
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
                <Text style={styles.title}>Target</Text>
                <Text style={styles.subtitle}>Actual Weight</Text>
                <Picker
                    selectedValue={selectedWeight}
                    style={styles.picker}
                    onValueChange={handleWeightChange}
                >
                    {weightOptions.map((value) => (
                        <Picker.Item key={value} label={`${value} kg`} value={value} />
                    ))}
                </Picker>
                <Text style={styles.subtitle}>Ideal Weight</Text>
                <Picker
                    selectedValue={selectedIdealWeight}
                    style={styles.picker}
                    onValueChange={handleIdealWeightChange}
                >
                    {weightOptions.map((value) => (
                        <Picker.Item key={value} label={`${value} kg`} value={value} />
                    ))}
                </Picker>
            </View>
            <View style={styles.container2}>
                <Text style={styles.subtitle}>In how much time do you want to achieve your goal?</Text>
                <CustomObjetiveButton
                    text="3 Months"
                    buttonStyle={getButtonStyle('threeMonths')}
                    textStyle={getTextStyle('threeMonths')}
                    onPress={() => handleButtonPress('threeMonths')}
                />
                <CustomObjetiveButton
                    text="6 Months"
                    buttonStyle={getButtonStyle('sixMonths')}
                    textStyle={getTextStyle('sixMonths')}
                    onPress={() => handleButtonPress('sixMonths')}
                />
                <CustomObjetiveButton
                    text="1 Year"
                    buttonStyle={getButtonStyle('oneYear')}
                    textStyle={getTextStyle('oneYear')}
                    onPress={() => handleButtonPress('oneYear')}
                />
                <Text style={styles.subtitle2}>Be aware that achieving this target in less time will make it more challenging.</Text>
            </View>

            <NextButton 
                text="Next" 
                buttonStyle={styles.nextButton} 
                textStyle={styles.buttonText} 
                handleButtonPress={() => navigation.navigate("FinalGoal")}  />
        </View>
    );
};

export default PersonalGoalsWeightTime;
