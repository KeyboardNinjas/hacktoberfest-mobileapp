import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  RefreshControl,
  Alert,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../../assets/Images/HacktoberLogo.png';
import styles from './Friends.style';
import UserDetails from '../../components/UserDetails/UserDetails.component';
import UserPR from '../../components/UserPR/UserPR.component';
import BottomBar from '../../components/BottomBar/BottomBar.component';
import AsyncStorage from '@react-native-community/async-storage';
import {
  MY_PROFILE_USERNAME,
  DARK_BLUE,
  BLUE,
  FONT_FAMILY,
  WHITE,
  PURPLE,
} from '../../data/consts';
import { getUserData } from '../../data/helpers';
import MyFriend from '../../components/MyFriend/MyFriend.component';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: false,
      noUser: false,
      addUser: false,
      username: '',
    };
  }

  async getUser(refresh = false) {
    this.setState({ loading: true });
    const username = await AsyncStorage.getItem(MY_PROFILE_USERNAME);
    if (username) {
      const user = await getUserData(username, refresh);
      console.log(user);
      if (user) {
        this.setState({
          user,
          loading: false,
          noUser: false,
        });
      } else {
        this.setState({
          loading: false,
          error: true,
          noUser: true,
        });
      }
    } else {
      this.setState({
        noUser: true,
        loading: false,
      });
    }
    console.log('State', this.state);
  }

  componentDidMount() {
    this.getUser();
  }

  async setUser() {
    const { username } = this.state;
    this.setState({ username: '', addUser: false });
    await AsyncStorage.setItem(MY_PROFILE_USERNAME, username);
    this.getUser(true);
  }

  render() {
    const { loading, user, noUser, addUser } = this.state;
    return (
      <>
        <ImageBackground style={styles.background}>
          <View style={styles.logoBackground}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.headingText}>Friends Profiles</Text>
          </View>
          <ScrollView>
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <MyFriend />
            <View style={{ height: 8 }} />
          </ScrollView>
          <BottomBar
            onAdd={() => this.setState({ addUser: true })}
            activeTab="catsTab"
          />
        </ImageBackground>
      </>
    );
  }
}
export default Friends;
