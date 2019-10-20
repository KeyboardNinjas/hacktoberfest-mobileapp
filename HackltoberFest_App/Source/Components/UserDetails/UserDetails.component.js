import React, {Component} from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';
import styles from './UserDetails.style';
import ProfilePic from '../../Assets/Images/ProfilePicDemo.png';

const myConstant = props => (
  <View style={styles.background}>
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
  </View>
);
export default myConstant;
