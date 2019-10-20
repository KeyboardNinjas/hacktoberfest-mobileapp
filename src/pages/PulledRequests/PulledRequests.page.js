import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './PulledRequests.style';
import UserPR from '../../components/UserPR/UserPR.component';
import Logo from '../../assets/Images/HacktoberLogo.png';
import Dustbin from '../../assets/SVG/Dustbin';
import BackArrow from '../../assets/SVG/BackArrow';

class PulledRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.logoBackground}>
        <View style={styles.logoBackground}>
          <View style={styles.header}>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <BackArrow />
            </TouchableOpacity>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <Dustbin />
            </TouchableOpacity>
          </View>
          <Text style={styles.headingText}>USERNAME</Text>
          <Text style={styles.headingText}>Pull Requests</Text>
        </View>
        <ScrollView>
          <View style={styles.background}>
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <UserPR />
            <View style={{ height: 15 }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default PulledRequests;
