import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './MyFriend.style';
import { withNavigation } from 'react-navigation';

const MyFriend = ({ prs, username, userImage, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('PulledRequests', { username })}>
    <View style={styles.profile}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Image style={styles.profilePic} source={{ uri: userImage }} />
        <Text style={styles.friendName}>{username}</Text>
      </View>
      <Text style={styles.pullRequestDetails}>
        <Text style={styles.pullRequestDone}>{(prs || []).length}</Text>/4
      </Text>
    </View>
  </TouchableOpacity>
);

export default withNavigation(MyFriend);
