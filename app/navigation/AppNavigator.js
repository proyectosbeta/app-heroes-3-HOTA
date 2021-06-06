import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from 'screens/Home/Index'; 

const AppNavigator = createStackNavigator(
  {
    Home: Index
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);