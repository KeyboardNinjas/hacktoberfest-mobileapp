import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './PulledRequests.style';

class PulledRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.headingText}>Pull request 1</Text>
        <Text style={styles.headingText}>Pull request 2</Text>
        <Text style={styles.headingText}>Pull request 3</Text>
      </View>
    );
  }
}
export default PulledRequests;
