import React from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import { TextBold } from '../../../Text';
import  Icon  from 'react-native-vector-icons/Ionicons';

export default function ModalConfirmedAdd({setTest, modalConfirmedAdd, setModalConfirmedAdd}) {
  return (
    <Modal
    animationType= "fade"
    transparent={true}
    visible={modalConfirmedAdd}
    onRequestClose={() => {setTest(false), setModalConfirmedAdd(false)}}>
        <View style={{width: '80%', backgroundColor: 'white', height: 150, position: 'absolute', alignSelf: 'center', top: 300, borderRadius: 20}}>
            <Icon name='checkmark-circle-outline' style={{color: 'black', alignSelf: 'center', top: 20}} size={40}/>
            <TextBold style={{color: 'black', alignSelf: 'center', top: 20}}>Lista atualizada com sucesso!</TextBold>
            <View style={{width: 100, height: 25, alignSelf: 'center', top: 40, borderRadius: 10, backgroundColor: 'black'}}>
                <TouchableOpacity style={{top: 3}} onPress={() => {setTest(false), setModalConfirmedAdd(false)}}>
                    <TextBold style={{color: 'white', alignSelf: 'center'}}>OK</TextBold>
                </TouchableOpacity>
            </View>
        </View>
      
    </Modal>
  );
}