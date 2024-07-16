import AppNavigator from './app';
import AuthNavigator from './auth';

const MainSwitchNavigator = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default MainSwitchNavigator;
