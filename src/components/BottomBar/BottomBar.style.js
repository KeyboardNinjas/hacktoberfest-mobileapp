import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  catTab: {
    backgroundColor: '#3B4A6B',
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  plusTab: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    zIndex: 100,
    bottom: 0,
    marginBottom: 20,
    position: 'absolute',
  },
});

export default styles;
