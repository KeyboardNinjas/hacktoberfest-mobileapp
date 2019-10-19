import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Logo from '../../Assets/Images/HacktoberLogo.png';
import styles from './LandingPage.style';
import UserDetails from '../../Components/UserDetails/UserDetails.component';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground style={styles.background}>
        <View style={{backgroundColor: '#1D2C4E'}}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
        <UserDetails />
      </ImageBackground>
    );
  }
}
export default LandingPage;
