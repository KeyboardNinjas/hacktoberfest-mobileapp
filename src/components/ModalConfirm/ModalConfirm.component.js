import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './ModalConfirm.style';
import { PURPLE } from '../../data/consts';
import PropTypes from 'prop-types';

const ModalConfirm = ({ visible, onConfirmPress, onCancelPress, message }) => {
  const handleCancelPress = () => {
    onCancelPress();
  };
  const handleConfirmPress = () => {
    onConfirmPress();
  };

  return (
    <Modal visible={visible} transparent animated animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleCancelPress}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirmPress}
                style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onconfirmPress: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalConfirm;
