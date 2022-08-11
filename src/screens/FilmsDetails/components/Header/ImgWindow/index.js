import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {apiImage} from '../../../../../service/api';
import styles from './style';
import WatchScreen from '../../../../WatchScreen';
const baseUrl = apiImage.defaults.baseURL;

export default function ImgWindow({id, visible, setVisible}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={setVisible}
          activeOpacity={0.7}
          style={styles.btn}>
          <Icon
            name="closecircle"
            color="#f5f5f5"
            size={55}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.modalView}>
          <WatchScreen id={id} />
        </View>
      </View>
    </Modal>
  );
}
