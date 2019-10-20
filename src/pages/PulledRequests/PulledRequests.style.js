import { StyleSheet } from 'react-native';
import { BLUE, DARK_BLUE, WHITE, FONT_FAMILY } from '../../data/consts';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    fontFamily: FONT_FAMILY,
    justifyContent: 'center',
  },
  logoBackground: {
    backgroundColor: BLUE,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 5,
    paddingBottom: 10,
  },
  logo: {
    alignSelf: 'center',
    width: '70%',
  },
  background: {
    backgroundColor: DARK_BLUE,
    height: '100%',
  },
  headingText: {
    textTransform: 'capitalize',
    fontSize: 28,
    alignSelf: 'center',
    color: WHITE,
    fontFamily: FONT_FAMILY,
  },
});

export default styles;
