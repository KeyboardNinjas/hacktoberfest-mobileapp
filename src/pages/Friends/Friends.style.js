import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../data/consts';

const styles = StyleSheet.create({
  logoBackground: {
    backgroundColor: '#1D2C4E',
    marginBottom: 10,
  },
  background: {
    backgroundColor: '#192249',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '90%',
  },
  headingText: {
    fontFamily: FONT_FAMILY,
    fontSize: 35,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
