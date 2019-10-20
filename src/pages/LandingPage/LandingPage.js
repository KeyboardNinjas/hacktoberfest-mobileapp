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

class LandingPage extends Component {
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
          </View>
          {!noUser && !loading && <UserDetails {...user} />}
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => this.getUser(true)}
              />
            }>
            {noUser && <Text>No User Added</Text>}
            {!noUser && !loading && (
              <>
                {user.prs.map(pr => (
                  <UserPR {...pr} key={pr.number} />
                ))}
              </>
            )}
            <View style={{ height: 20 }} />
          </ScrollView>
          <BottomBar
            onAdd={() => this.setState({ addUser: true })}
            activeTab="catTab"
          />
        </ImageBackground>
        <Modal visible={addUser} transparent animated animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}>
            <View
              style={{
                backgroundColor: DARK_BLUE,
                width: '100%',
                padding: 10,
              }}>
              <View>
                <Text style={{ color: WHITE, fontFamily: FONT_FAMILY }}>
                  Enter the username you wish to set as your profile
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={username => this.setState({ username })}
                  style={{
                    width: '100%',
                    height: 40,
                    color: WHITE,
                    backgroundColor: BLUE,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    flexWrap: 'wrap',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({ addUser: false, username: '' })
                    }
                    style={{
                      backgroundColor: BLUE,
                      flex: 1,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}>
                    <Text style={{ fontFamily: FONT_FAMILY, color: WHITE }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setUser()}
                    style={{
                      backgroundColor: PURPLE,
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                    }}>
                    <Text style={{ fontFamily: FONT_FAMILY, color: WHITE }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
export default LandingPage;
