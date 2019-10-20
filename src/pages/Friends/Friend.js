import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  RefreshControl,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../../assets/Images/HacktoberLogo.png';
import styles from './Friends.style';
import BottomBar from '../../components/BottomBar/BottomBar.component';
import AsyncStorage from '@react-native-community/async-storage';
import { getUserData } from '../../data/helpers';
import MyFriend from '../../components/MyFriend/MyFriend.component';
import { PROFILES_HACKTOBER_DATA, PROFILES_USERNAMES } from '../../data/consts';
import ModalInput from '../../components/ModalInput/ModalInput.component';
import Alert from '../../components/Alert/Alert.component';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: false,
      noUsers: false,
      addUser: false,
    };
  }

  async getUsers(refresh = false) {
    this.setState({ loading: true });
    let usernames = await AsyncStorage.getItem(PROFILES_USERNAMES);
    if (usernames) {
      usernames = JSON.parse(usernames);
    } else {
      usernames = [];
    }
    if (usernames.length) {
      const users = [];
      for (let k = 0; k < usernames.length; k++) {
        const data = await getUserData(usernames[k], refresh);
        if (data) {
          users.push(data);
        } else {
          usernames.splice(k, 1);
          await AsyncStorage.setItem(
            PROFILES_USERNAMES,
            JSON.stringify(usernames),
          );
        }
      }
      // Sort by user with most PRS
      users.sort((a, b) => (a.prs.length < b.prs.length ? 1 : -1));
      this.setState({
        users,
        loading: false,
        noUsers: false,
      });
    } else {
      this.setState({
        noUsers: true,
        loading: false,
      });
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  async addUser(username) {
    username = `${username}`.toLowerCase();
    this.setState({ addUser: false });
    let usernames = await AsyncStorage.getItem(PROFILES_USERNAMES);
    if (usernames) {
      usernames = JSON.parse(usernames);
    } else {
      usernames = [];
    }
    if (!usernames.includes(username)) {
      usernames.push(username);
    }
    await AsyncStorage.setItem(PROFILES_USERNAMES, JSON.stringify(usernames));
    this.getUsers();
  }

  render() {
    const { loading, users, noUsers, addUser } = this.state;
    return (
      <>
        <ImageBackground style={styles.background}>
          <View style={styles.logoBackground}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.headingText}>Friends Profiles</Text>
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => this.getUsers(true)}
              />
            }>
            {noUsers && (
              <Alert message="No friends added, click on the + button at the bottom to add your friends!" />
            )}
            {!loading &&
              !!users.length &&
              users.map((user, idx) => <MyFriend key={idx} {...user} />)}
            <View style={{ height: 10 }} />
          </ScrollView>
          <BottomBar
            onAdd={() => this.setState({ addUser: true })}
            activeTab="catsTab"
          />
        </ImageBackground>
        <ModalInput
          visible={addUser}
          message="Enter the github username of the friend you want to add"
          onContinuePress={username => this.addUser(username)}
          onCancelPress={() => this.setState({ addUser: false })}
        />
      </>
    );
  }
}

export default Friends;
