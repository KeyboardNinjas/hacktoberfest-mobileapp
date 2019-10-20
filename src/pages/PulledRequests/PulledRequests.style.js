import { StyleSheet } from 'react-native';
import { BLUE } from '../../data/consts';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
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
    backgroundColor: '#192249',
    height: '100%',
  },
  headingText: {
    textTransform: 'capitalize',
    fontSize: 28,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
