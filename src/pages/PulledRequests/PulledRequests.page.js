import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import styles from './PulledRequests.style';
import UserPR from '../../components/UserPR/UserPR.component';
import Logo from '../../assets/Images/HacktoberLogo.png';
import Dustbin from '../../assets/SVG/Dustbin';
import BackArrow from '../../assets/SVG/BackArrow';
import { getUserData } from '../../data/helpers';
import Alert from '../../components/Alert/Alert.component';
import AsyncStorage from '@react-native-community/async-storage';
import { PROFILES_USERNAMES, PROFILES_HACKTOBER_DATA } from '../../data/consts';
import ModalConfirm from '../../components/ModalConfirm/ModalConfirm.component';
import { NavigationActions, StackActions } from 'react-navigation';

class PulledRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false,
      removeUserModal: false,
    };
  }

  async getUser(refresh = false) {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    this.setState({ loading: true });
    if (username) {
      const user = await getUserData(username, refresh);
      if (user) {
        this.setState({
          user,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
          error: true,
        });
      }
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  reset() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Friends' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  async removeUser() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    let usernames = await AsyncStorage.getItem(PROFILES_USERNAMES);
    if (usernames) {
      usernames = JSON.parse(usernames);
    } else {
      usernames = [];
    }
    usernames.splice(usernames.findIndex(user => user === username), 1);
    // await AsyncStorage.setItem(PROFILES_USERNAMES, users);
    const usersData = JSON.parse(
      (await AsyncStorage.getItem(PROFILES_HACKTOBER_DATA)) || {},
    );
    delete usersData[username];
    await AsyncStorage.setItem(PROFILES_USERNAMES, JSON.stringify(usernames));
    await AsyncStorage.setItem(
      PROFILES_HACKTOBER_DATA,
      JSON.stringify(usersData),
    );
    this.setState({ removeUserModal: false });
    this.reset();
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { navigation } = this.props;
    const { user, loading, error, removeUserModal } = this.state;
    const username = navigation.getParam('username');
    return (
      <>
        <View style={styles.logoBackground}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate('Friends')}>
              <BackArrow />
            </TouchableOpacity>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => this.setState({ removeUserModal: true })}>
              <Dustbin />
            </TouchableOpacity>
          </View>
          <Text style={styles.headingText}>{username}</Text>
          <Text style={styles.headingText}>Pull Requests</Text>
        </View>
        <ScrollView
          scrollEnabled
          style={styles.background}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => this.getUser(true)}
            />
          }>
          {error && (
            <Alert message="An error occured while trying to retrieve the pull requests, please try again later" />
          )}
          {!loading &&
            user &&
            user.prs.map((pr, idx) => <UserPR key={idx} {...pr} />)}
        </ScrollView>
        <ModalConfirm
          message={'Are you sure you wish to remove this user?'}
          visible={removeUserModal}
          onCancelPress={() => this.setState({ removeUserModal: false })}
          onConfirmPress={() => this.removeUser()}
        />
      </>
    );
  }
}
export default PulledRequests;
