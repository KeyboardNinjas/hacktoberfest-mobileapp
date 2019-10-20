import { DARK_BLUE, WHITE, FONT_FAMILY, BLUE, PURPLE } from '../../data/consts';

export default {
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  modal: {
    backgroundColor: DARK_BLUE,
    width: '100%',
    padding: 10,
  },
  message: {
    color: WHITE,
    fontFamily: FONT_FAMILY,
  },
  textInput: {
    width: '100%',
    height: 40,
    color: WHITE,
    backgroundColor: BLUE,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  cancelButton: {
    backgroundColor: BLUE,
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  continueButton: {
    backgroundColor: PURPLE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  buttonText: {
    fontFamily: FONT_FAMILY,
    color: WHITE,
  },
};
