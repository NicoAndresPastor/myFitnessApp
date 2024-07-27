import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import CTAButton from '../../../components/CTAButton';
import BackButton from '../../../components/BackButton';
const ForgotPassword = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  return (
    <View style={styles.principalContainer}>
      
      <View style={styles.buttonBack}>
        <BackButton />
      </View>
      <View style={styles.container1}>
        <Text style={styles.title1}>Oh no!</Text>
        <Text style={styles.title2}>Did you forget your password?</Text>
        <Image source={require('../../../images/ForgotPassword.png')} style={styles.image} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.subtitle}>We will send you an email to reset it</Text>
        <Text style={styles.subtitle}>Enter your email</Text>
        <TextInput 
          style={[styles.input, error ? styles.inputerror : null]} 
          placeholder='Email' 
          keyboardType='email-address' 
          value={text} 
          onChangeText={(newText) => setText(newText)} 
        />
        <CTAButton 
          buttonContainerStyle={styles.buttonContainer} 
          textStyle={styles.buttonText} 
          text={'SEND EMAIL'} 
          handleButtonPress={() => { 
            if (text === '') {
              setError(true);
            } else {
              setError(false);
            }
          }} 
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
