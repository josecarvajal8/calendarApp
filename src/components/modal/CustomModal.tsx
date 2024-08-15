import React from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TypoBase} from '../typography/TypoBase';
import {Colors} from '../../config/colors';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <TypoBase style={{color: Colors.common_white}}>X</TypoBase>
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};
