import React, {Component} from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';
import styles from './UserPR.style';
import ProfilePic from '../../Assets/Images/ProfilePicDemo.png';

const UserPR = props => (
  <View style={styles.background}>
    <Text style={styles.pullRequestNum}>Pull request #1</Text>
    <Text style={styles.pullRequestDetails}>
      Add something usefull to the repo Woohooo
    </Text>
  </View>
);
export default UserPR;
