import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Logo from '../../Assets/Images/HacktoberLogo.png';
import styles from './LandingPage.style';
import UserDetails from '../../Components/UserDetails/UserDetails.component';
import UserPR from '../../Components/UserPR/UserPR.component';
import {ScrollView} from 'react-native-gesture-handler';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground style={styles.background}>
        <View style={styles.logoBackground}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
        <ScrollView>
          <UserDetails />
          <UserPR />
          <UserPR />
          <UserPR />
          <UserPR />
          <UserPR />
          <UserPR />
          <UserPR />
          <UserPR />
        </ScrollView>
      </ImageBackground>
    );
  }
}
export default LandingPage;
