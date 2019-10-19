import {StyleSheet} from 'react-native';
import {BOLD_WEIGHT} from 'jest-matcher-utils';

const styles = StyleSheet.create({
  logoBackground: {
    backgroundColor: '#1D2C4E',
  },
  background: {
    backgroundColor: '#192249',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '90%',
  },
  profilePic: {
    height: 144,
    width: 144,
  },
  profileDetails: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  amountOfRepos: {
    alignSelf: 'center',
    fontSize: 82,
    color: '#FFFFFF',
  },
  headingText: {
    fontSize: 48,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
