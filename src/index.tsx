import {NavigationContainer} from '@react-navigation/native';
import MainSwitchNavigator from './navigation';

const FitnessApp = () => {
  return (
    <NavigationContainer>
      <MainSwitchNavigator />
    </NavigationContainer>
  );
};

export default FitnessApp;
