import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import OptionButton from "../components/OptionButton";
import { useNavigation } from "@react-navigation/native";
import {useDispatch} from 'react-redux';

const ProfileGeneral = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: 'SET_LOGIN', payload: {isLoged: false}});
  }
  return (
    <View style={styles.principalContainer}>
      <View style={styles.container1}>
        <Image source={require('../../../../images/Profile.png')} style={styles.profileImage} />
        <Text style={styles.text}>Nicolas Pastor</Text>
      </View>
      <View style={styles.container2}></View>
      <View style={styles.container3}>
        <OptionButton 
          text="Edit Profile" 
          iconName="user" 
          buttonContainerStyle={styles.FirstButton} 
          handleButtonPress={() => navigation.navigate("EditProfile")}
        />
        <OptionButton 
          text="Change Goal" 
          iconName="flag" 
          handleButtonPress={() => navigation.navigate("PersonalInformation")}
        />
        <OptionButton text="Help Center" iconName="question" handleButtonPress={() => navigation.navigate("Help")}/>
        <OptionButton 
          text="Logout" 
          iconName="logout" 
          color="#FF0000" 
          textStyle={{ color: "#FF0000" }}
          handleButtonPress={handleLogout} 
        />
        <OptionButton 
          text="Delete Account" 
          iconName="deleteuser" 
          color="#FF0000" 
          textStyle={{ color: "#FF0000" }} 
          buttonContainerStyle={styles.LastButton} 
        />
      </View>
    </View>
  );
};

export default ProfileGeneral;
