import { PROFILES_HACKTOBER_DATA } from './consts';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const getUserData = async (username, refresh = false) => {
  username = `${username}`.toLowerCase();
  let data = {};
  let profiles = {};
  try {
    profiles = JSON.parse(
      (await AsyncStorage.getItem(PROFILES_HACKTOBER_DATA)) || {},
    );
  } catch {
    profiles = {};
  }
  const exists = Object.keys(profiles).length && profiles[username];
  if (exists) {
    data = profiles[username];
  }
  if (!exists || refresh) {
    try {
      const rawResult = await axios.get(
        `https://hacktoberfestchecker.jenko.me/prs?username=${username}`,
      );
      const result = rawResult.data;
      data.username = `${result.username}`.toLowerCase();
      data.prs = result.prs;
      data.userImage = result.userImage;
      profiles[username] = {
        username: data.username,
        prs: data.prs,
        userImage: data.userImage,
      };
      await AsyncStorage.setItem(
        PROFILES_HACKTOBER_DATA,
        JSON.stringify(profiles),
      );
    } catch (error) {
      Alert.alert(
        'User Profile Error',
        `An error occured while trying to retrieve the data for username ${username}`,
      );
      return undefined;
    }
  }
  return data;
};
