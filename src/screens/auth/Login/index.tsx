import React, { useState } from 'react';
import { Text, View, TextInput, Image, Pressable } from 'react-native';
import styles from './styles';
import CTAButton from '../../../components/CTAButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Check from '../../../components/Check';



const Login = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.container1}>
      <View style= {styles.container2}>
        <Text style={styles.title}>Hi there!</Text>
        <Text style={styles.subtitle}>Welcome back to FastCal</Text>
      
      </View>
      <View style={styles.container3}>
        <View style={styles.inputContainers}>
          <View style={styles.inputContainer}>
            <Icon name="user" style={styles.iconStyle} />
            <TextInput
              placeholder='Username'
              style={[styles.input, error ? styles.inputerror : null]}
              onChangeText={(newText) => setText(newText)}
              value={text}
              keyboardType='default'
              returnKeyType='done'
              autoCapitalize='none'
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" style={styles.iconStyle} />
            <TextInput
              placeholder="Password"
              style={[styles.input, error ? styles.inputerror : null]}
              onChangeText={(newPassword) => setPassword(newPassword)}
              value={password}
              secureTextEntry
              keyboardType='default'
              returnKeyType='done'
              autoCapitalize='none'
            />
          </View>
        </View>
        <Check text={'Remember me'} />
        <CTAButton buttonContainerStyle={styles.buttonLogIn} textStyle={styles.buttonTextLogIn} text={'LOGIN'} handleButtonPress={() => setError(true)} />
        <CTAButton buttonContainerStyle={styles.buttonPassword} textStyle={styles.buttonTextPassword}
          text={'FORGOT PASSWORD'}
          handleButtonPress={() => handleForgotPassword()}
        />
        <View style={styles.signUpContainer}>
          <Text>Did you not have an account?</Text>
          <Pressable onPress={handleSignUp}>
            <Text style={styles.signUpText}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
