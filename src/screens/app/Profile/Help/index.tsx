import React from "react";
import { Text, View, Image, StyleSheet, Linking } from "react-native";
import styles from "./styles";
import BackButton from "../../../../components/BackButton";

const Help = () => {
    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <View style={styles.principalContainer}>
            <View style={styles.containerbuttonBack}>
                <BackButton/>
            </View>
            <View style={styles.container1}>
                <Text style={styles.title}>Help Center</Text>
                <Image source={require('../../../../images/Help.png')} style={styles.image} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.title}>Thank you for using our app!</Text>
                <Text style={styles.subtitle}>You can contact us by sending an email to</Text>
                <Text 
                    style={styles.textEmail} 
                    onPress={() => handleEmailPress('nicolasandrespastor@gmail.com')}
                >
                    Nicolasandrespastor@gmail.com
                </Text>
                <Text style={styles.subtitle}>or</Text>
                <Text 
                    style={styles.textEmail} 
                    onPress={() => handleEmailPress('Alexismeier1@gmail.com')}
                >
                    Alexismeier1@gmail.com
                </Text>
            </View>
        </View>
    );
};

export default Help;
