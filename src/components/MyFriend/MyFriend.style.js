import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../data/consts';

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#1D2C4E',
    paddingBottom: 16,
  },
  friendName: {
    fontSize: 12,
    color: '#92EAFF',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    fontFamily: FONT_FAMILY,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1D2C4E',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  profilePic: {
    height: 60,
    width: 60,
  },
  pullRequestDetails: {
    fontSize: 48,
    color: '#ffffff',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: FONT_FAMILY,
    marginBottom: 10,
  },
});

export default styles;
