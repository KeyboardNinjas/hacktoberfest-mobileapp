//Packages
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Pages
import LandingPage from '../pages/LandingPage/LandingPage';
import PulledRequests from '../pages/PulledRequests/PulledRequests.page';
import Friends from '../pages/Friends/Friend';

const NavStack = createStackNavigator(
  {
    Friends,
    LandingPage,
    PulledRequests,
  },
  {
    initialRouteName: 'LandingPage',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const Navigator = createAppContainer(NavStack);

export default Navigator;
