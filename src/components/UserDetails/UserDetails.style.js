import { StyleSheet } from 'react-native';
import { FONT_FAMILY, WHITE, YELLOW, BLUE } from '../../data/consts';

const styles = StyleSheet.create({
  background: {
    backgroundColor: BLUE,
    paddingBottom: 10,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 5,
  },
  profilePic: {
    height: 120,
    width: 120,
    borderColor: WHITE,
    borderWidth: 4,
  },
  profileDetails: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  amountOfRepos: {
    alignSelf: 'center',
    fontSize: 64,
    color: WHITE,
    fontFamily: FONT_FAMILY,
  },
  prs: {
    color: YELLOW,
    alignSelf: 'center',
    fontSize: 64,
    fontFamily: FONT_FAMILY,
  },
  headingText: {
    fontSize: 32,
    alignSelf: 'center',
    color: WHITE,
    fontFamily: FONT_FAMILY,
  },
});

export default styles;
