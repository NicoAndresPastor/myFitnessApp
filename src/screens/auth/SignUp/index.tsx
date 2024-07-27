import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import CTAButton from '../../../components/CTAButton';
import BackButton from '../../../components/BackButton';
import Check from '../../../components/Check';

const SignUp = () => {
  const [textFirstName, setTextFirstName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [error, setError] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isValid = () => {
    if (
      textFirstName === '' || 
      textLastName === '' || 
      textEmail === '' || 
      textEmail.indexOf('@') === -1 || 
      !termsAccepted
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <View style={styles.principalContainer}>
      <View style={styles.buttonBack}>
        <BackButton />
      </View>
      <View style={styles.container1}>
        <Text style={styles.title1}>Sign Up</Text>
        <Image source={require('../../../images/SignUp.png')} style={styles.image} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title2}>Create your account</Text>
        <TextInput
          placeholder='First Name'
          style={[styles.input, error ? styles.inputerror : null]}
          onChangeText={(newText) => setTextFirstName(newText)}
          value={textFirstName}
          keyboardType='default'
          returnKeyType='done'
          autoCapitalize='none'
        />
        <TextInput
          placeholder='Last Name'
          style={[styles.input, error ? styles.inputerror : null]}
          onChangeText={(newText) => setTextLastName(newText)}
          value={textLastName}
          keyboardType='default'
          returnKeyType='done'
          autoCapitalize='none'
        />
        <TextInput
          placeholder='Email'
          style={[styles.input, error ? styles.inputerror : null]}
          onChangeText={(newText) => setTextEmail(newText)}
          value={textEmail}
          keyboardType='email-address'
          returnKeyType='done'
          autoCapitalize='none'
        />
        <Check 
          text={'I agree to the Terms & Conditions'}
          value={termsAccepted}
          onValueChange={setTermsAccepted}
        />
        <CTAButton 
          buttonContainerStyle={styles.signUpContainer} 
          textStyle={styles.buttonText} 
          text={'Sign Up'} 
          onPress={isValid} 
        />
      </View>
    </View>
  );
};

export default SignUp;
