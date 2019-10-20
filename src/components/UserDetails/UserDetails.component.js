import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './UserDetails.style';

const UserDetails = ({ username, prs, userImage }) => (
  <View style={styles.background}>
    <Text style={styles.headingText}>{username}</Text>
    <View style={styles.profileDetails}>
      <Image
        source={{ uri: userImage }}
        style={styles.profilePic}
        resizeMode="contain"
      />
      <Text style={styles.amountOfRepos}>
        <Text style={styles.prs}>{prs.length}</Text>
        <Text>/</Text>
        <Text>4</Text>
      </Text>
    </View>
  </View>
);

export default UserDetails;
