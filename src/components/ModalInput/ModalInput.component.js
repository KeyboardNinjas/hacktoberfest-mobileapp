import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './ModalInput.style';
import { PURPLE } from '../../data/consts';
import PropTypes from 'prop-types';

const ModalInput = ({ visible, onContinuePress, onCancelPress, message }) => {
  const [value, setValue] = useState('');
  const handleCancelPress = () => {
    setValue('');
    onCancelPress();
  };
  const handleContinuePress = () => {
    const valueCopy = `${value}`;
    setValue('');
    onContinuePress(valueCopy);
  };
  return (
    <Modal visible={visible} transparent animated animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View>
            <TextInput
              onChangeText={val => setValue(val)}
              value={value}
              style={styles.textInput}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleCancelPress}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!value}
                onPress={handleContinuePress}
                style={[
                  styles.continueButton,
                  // eslint-disable-next-line react-native/no-inline-styles
                  { backgroundColor: !value ? '#B067C5' : PURPLE },
                ]}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ModalInput.propTypes = {
  visible: PropTypes.bool.isRequired,
  onContinuePress: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalInput;
