import React from "react";
import { View, Text, TextInput,Image } from "react-native";
import BackButton from "../../../../components/BackButton";
import styles from "./style";
import EditOptionButton from "../components/EditOptionButton";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../../../components/CustomNextButton";


const EditProfile = () => {
    const validateText = (text) => {
    return text.trim().length > 0 && text.trim().length < 50;
  };
  const navigation = useNavigation();
    return (
        <View style={styles.principalContainer}>
            <View style={styles.containerbuttonBack}>
                <BackButton  />
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>Edit Profile</Text>
                <Image source={require('../../../../images/Profile.png')} style={styles.profileImage} />
                
            </View>
            <View style={styles.container3}>
                
            </View>
            <View style={styles.container2}>
                <EditOptionButton title="Name" initialText="Alexis" onSave={(text) => console.log(text)} validate={validateText} buttonContainerStyle={styles.FirstButton}/>
                <EditOptionButton title="Email" initialText="a@a.com" onSave={(text) => console.log(text)} validate={validateText}/>
                
                <EditOptionButton title="Password" initialText="********" onSave={(text) => console.log(text)} validate={validateText}/>
                <EditOptionButton title="Confirm Password" initialText="********" onSave={(text) => console.log(text)} validate={validateText} buttonContainerStyle={styles.LastButton}/>
            </View>
            <NextButton text="Save" handleButtonPress={() => navigation.navigate("Profile")} buttonStyle={styles.saveButton}/>
            
            
        </View>
    );
};

export default EditProfile;