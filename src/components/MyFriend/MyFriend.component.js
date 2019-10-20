import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import styles from './MyFriend.style';
import FriendProfilePic from '../../assets/Images/ProfilePicDemo.png';

const MyFriend = ({ number, repo_name, title, url, created_at }) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <View style={styles.profile}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Image style={styles.profilePic} source={FriendProfilePic} />
        <Text style={styles.friendName}>Friends Name</Text>
      </View>
      <Text style={styles.pullRequestDetails}>4/4</Text>
    </View>
  </TouchableOpacity>
);

export default MyFriend;
