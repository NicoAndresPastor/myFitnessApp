import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import SelectionButton from "../components/SelectionButton";
import BackButton from "../../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../../../components/CustomNextButton";

const PersonalInformation = () => {
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [selectedActivityDays, setSelectedActivityDays] = useState(null);

    const handleGenderSelection = (selectedGender) => {
        console.log(selectedGender);
    };

    const handleHeightChange = (itemValue) => {
        console.log("Height selected:", itemValue);
        setHeight(itemValue);
    };

    const handleAgeChange = (itemValue) => {
        console.log("Age selected:", itemValue);
        setAge(itemValue);
    };

    const handleActivityDaysSelection = (days) => {
        setSelectedActivityDays(days);
        console.log("Selected activity days:", days);
    };

    const navigation = useNavigation();

    const activityOptions = ["0", "1-2", "3-4", "5-7"];

    
    const heightOptions = Array.from({ length: 121 }, (_, i) => (i + 120)); 


    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1); 

    return (
        <View style={styles.container}>
            <View style={styles.containerbuttonBack}>
                <BackButton />
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>Goals</Text>
                <Image source={require("../../../../images/Target.png")} style={styles.image} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.subtitle}>Personal Information</Text>
                <SelectionButton 
                    title="Gender" 
                    initialText="Male" 
                    options={["Male", "Female"]} 
                    handleButtonPress={handleGenderSelection}
                    buttonContainerStyle={styles.buttonSelectionContainer}
                />

                <Text style={styles.subtitle}>Select your height:</Text>
                <Picker
                    selectedValue={height}
                    style={[styles.picker, { height: 50, width: '100%', backgroundColor: '#f0f0f0', marginTop: 10, borderRadius: 10 }]} 
                    onValueChange={handleHeightChange}
                >
                    {heightOptions.map((value) => (
                        <Picker.Item key={value} label={`${value.toFixed(0)} cm`} value={value.toFixed(2)} />
                    ))}
                </Picker>

                <Text style={styles.subtitle}>Select your age:</Text>
                <Picker
                    selectedValue={age}
                    style={[styles.picker, { height: 50, width: '100%', backgroundColor: '#f0f0f0', marginTop: 10, borderRadius: 10 }]}
                    onValueChange={handleAgeChange}
                >
                    {ageOptions.map((value) => (
                        <Picker.Item key={value} label={`${value} years`} value={value.toString()} />
                    ))}
                </Picker>

                <Text style={styles.subtitle}>How many days a week do you exercise?</Text>
                <View style={styles.activityOptionsContainer}>
                    {activityOptions.map((option, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleActivityDaysSelection(option)}
                            style={[
                                styles.activityOptionButton,
                                selectedActivityDays === option && styles.selectedActivityOptionButton,
                            ]}
                        >
                            <Text style={styles.activityOptionText, selectedActivityDays === option && styles.selectedActivityOptionText}>{option}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
                <NextButton 
                    text="Next" 
                    handleButtonPress={() => navigation.navigate("PersonalGoals")} 
                    buttonStyle={styles.nextButton} 
                    textStyle={styles.buttonText}
                />
        </View>
    );
};

export default PersonalInformation;
