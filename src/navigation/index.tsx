import AppNavigator from './app';
import AuthNavigator from './auth';
import {useSelector} from 'react-redux';
import {selectLogin} from '../redux/login/selectors';

const MainSwitchNavigator = () => {
  const {isLoged} = useSelector(selectLogin);
  return isLoged ? <AppNavigator /> : <AuthNavigator />;
};

export default MainSwitchNavigator;
