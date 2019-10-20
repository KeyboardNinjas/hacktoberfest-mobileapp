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
  pullRequestNum: {
    fontSize: 12,
    color: '#92EAFF',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    fontFamily: FONT_FAMILY,
  },
  pullRequestDetails: {
    fontSize: 12,
    color: '#99A1B3',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: FONT_FAMILY,
    marginBottom: 10,
  },
});

export default styles;
