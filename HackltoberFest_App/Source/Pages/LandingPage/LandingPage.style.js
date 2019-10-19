import {StyleSheet} from 'react-native';
import {BOLD_WEIGHT} from 'jest-matcher-utils';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#192249',
    height: '100%',
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  amountOfRepos: {
    alignSelf: 'center',
    fontSize: 72,
  },
  headingText: {
    fontSize: 48,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
