import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Logo from '../../Assets/Images/HacktoberLogo.png';
import ProfilePic from '../../Assets/Images/ProfilePicDemo.png';
import styles from './LandingPage.style';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground style={styles.background}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.headingText}>My Profile</Text>
        <View style={styles.profileDetails}>
          <Image
            source={ProfilePic}
            style={styles.profilePic}
            resizeMode="contain"
          />
          <Text style={styles.amountOfRepos}>
            3<Text>/</Text>
            <Text>4</Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
export default LandingPage;
