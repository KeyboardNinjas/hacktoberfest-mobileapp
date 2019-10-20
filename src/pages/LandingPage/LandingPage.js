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
import Info from '../../assets/SVG/Info';
import styles from './LandingPage.style';
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
import Alert from '../../components/Alert/Alert.component';
import ModalInput from '../../components/ModalInput/ModalInput.component';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: false,
      noUser: false,
      addUser: false,
    };
  }

  async getUser(refresh = false) {
    this.setState({ loading: true });
    const username = await AsyncStorage.getItem(MY_PROFILE_USERNAME);
    if (username) {
      const user = await getUserData(username, refresh);
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
  }

  componentDidMount() {
    this.getUser();
  }

  async setUser(username) {
    this.setState({ addUser: false });
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
          </View>
          {!noUser && !loading && <UserDetails {...user} />}
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => this.getUser(true)}
              />
            }>
            {noUser && (
              <Alert message="No user added, click on the + button at the bottom to add your profile!" />
            )}
            {!noUser && !loading && (
              <>
                {user.prs.map((pr, idx) => (
                  <UserPR {...pr} key={idx} />
                ))}
              </>
            )}
            <View style={{ height: 40 }} />
          </ScrollView>
          <BottomBar
            onAdd={() => this.setState({ addUser: true })}
            activeTab="catTab"
          />
        </ImageBackground>
        <ModalInput
          visible={addUser}
          message="Enter the github username you want to set as your profile"
          onContinuePress={username => this.setUser(username)}
          onCancelPress={() => this.setState({ addUser: false })}
        />
      </>
    );
  }
}
export default LandingPage;
