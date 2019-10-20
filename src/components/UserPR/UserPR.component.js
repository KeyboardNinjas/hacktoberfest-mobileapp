import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './UserPR.style';

const UserPR = ({ number, repo_name, title, url, created_at }) => (
  <TouchableOpacity
    style={styles.background}
    onPress={() => Linking.openURL(url)}>
    <Text style={styles.pullRequestNum}>{`${repo_name}#${number}`}</Text>
    <Text style={styles.pullRequestDetails}>{`${title} on ${created_at}`}</Text>
  </TouchableOpacity>
);

export default UserPR;
