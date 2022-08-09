import React from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { apiImage } from '../../../../../service/api';
import styles from './style';
const baseUrl = apiImage.defaults.baseURL;

export default function ImgWindow({ poster_path, visible, setVisible }) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                        activeOpacity={0.7}
                        style={styles.btn}
                    >
                        <Icon name='closecircle' color='#f5f5f5' size={55} style={styles.icon}/>
                    </TouchableOpacity>
                <View style={styles.modalView}>
                    <Image source={{ uri: `${baseUrl}/original${poster_path}` }}
                        style={styles.imgWrapper}
                    />
                </View>
            </View>
        </Modal>


    );

}