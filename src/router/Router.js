//Packages
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//Pages
import LandingPage from '../pages/LandingPage/LandingPage';
import PulledRequests from '../pages/PulledRequests/PulledRequests.page';

const NavStack = createStackNavigator(
  {
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
