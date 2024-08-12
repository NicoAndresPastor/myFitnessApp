import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import NextButton from "../../../../../components/CustomNextButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {selectUserData} from '../../../../../redux/goals/selectors.js'

const FinalGoal = () => {

    const navigation = useNavigation();
    const caloricGoal = useSelector(selectUserData);
    console.log(caloricGoal);
    const handleNextButtonPress = () => {
        navigation.navigate('Diario');
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Congratulations!</Text>
                <Text style={styles.subtitle3}>You completed the goal setup </Text>
                <Text style={styles.subtitle3}>You need to consume these macronutrients daily:</Text> 
            </View>
            <View style={styles.container2}>
                <View style={styles.row}>
                    <View style={styles.macronutrientsContainer}>
                        <Text style={styles.subtitle}>Calories</Text>
                        <Text style={styles.subtitle2}>{caloricGoal} kcal</Text>
                    </View>
                    <View style={styles.macronutrientsContainer}>
                        <Text style={styles.subtitle}>Protein</Text>
                        <Text style={styles.subtitle2}>50 g</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.macronutrientsContainer}>
                        <Text style={styles.subtitle}>Carbo</Text>
                        <Text style={styles.subtitle2}>100 g</Text>
                    </View>
                    <View style={styles.macronutrientsContainer}>
                        <Text style={styles.subtitle}>Fat</Text>
                        <Text style={styles.subtitle2}>30 g</Text>
                    </View>
                </View>
            </View>
              
            <NextButton
                text="OK"
                buttonStyle={styles.nextButton}
                textStyle={styles.buttonText}
                handleButtonPress={handleNextButtonPress}
            />
        </View>
    );
};

export default FinalGoal;
