import React from 'react';
import { View, Text } from 'react-native';
import styles from './Alert.style';
import Info from '../../assets/SVG/Info';

const Alert = ({ message }) => (
  <View style={styles.box}>
    <View>
      <Info />
    </View>
    <View style={styles.messageBox}>
      <Text style={styles.message}>{message}</Text>
    </View>
  </View>
);

export default Alert;
