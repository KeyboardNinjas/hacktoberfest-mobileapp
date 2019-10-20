import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1D2C4E',
    paddingBottom: 16,
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
