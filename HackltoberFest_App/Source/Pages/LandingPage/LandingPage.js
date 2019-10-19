import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Logo from '../../Assets/Images/LOGO.png';
import styles from './LandingPage.style';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.background}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.headingText}>
          Welcome to hacktober Landing Page
        </Text>
      </View>
    );
  }
}
export default LandingPage;
