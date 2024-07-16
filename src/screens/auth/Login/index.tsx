import {Text, Pressable, View} from 'react-native';
import styles from './styles';
import CTAButton from '../../../components/CTAButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text>ESTOY EN EL LOGIN</Text>
      <CTAButton text={'SIGN UP'} handleButtonPress={() => handleSignUp()} />
      <CTAButton
        text={'FORGOT PASSWORD'}
        handleButtonPress={() => handleForgotPassword()}
      />
    </View>
  );
};

export default Login;
