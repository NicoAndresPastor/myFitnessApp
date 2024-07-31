import {NavigationContainer} from '@react-navigation/native';
import MainSwitchNavigator from './navigation';
import {Provider} from 'react-redux';
import store from './redux';

const FitnessApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainSwitchNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default FitnessApp;
