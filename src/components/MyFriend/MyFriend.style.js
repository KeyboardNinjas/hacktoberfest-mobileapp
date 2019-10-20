import { StyleSheet } from 'react-native';
import {
  FONT_FAMILY,
  WHITE,
  YELLOW,
  BLUE,
  LIGHT_BLUE,
} from '../../data/consts';

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: BLUE,
    paddingBottom: 16,
  },
  friendName: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: LIGHT_BLUE,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    fontFamily: FONT_FAMILY,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: BLUE,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  profilePic: {
    borderColor: WHITE,
    borderWidth: 2,
    height: 60,
    width: 60,
  },
  pullRequestDetails: {
    fontSize: 48,
    color: WHITE,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: FONT_FAMILY,
    marginBottom: 10,
  },
  pullRequestDone: {
    fontSize: 48,
    color: YELLOW,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: FONT_FAMILY,
    marginBottom: 10,
  },
});

export default styles;
