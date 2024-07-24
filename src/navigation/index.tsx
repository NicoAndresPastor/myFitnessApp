import AppNavigator from './app';
import AuthNavigator from './auth';

const MainSwitchNavigator = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default MainSwitchNavigator;
