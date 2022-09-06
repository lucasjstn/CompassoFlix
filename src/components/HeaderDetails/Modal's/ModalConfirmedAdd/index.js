import React from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import { TextBold } from '../../../Text';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Conteiner, OkButtonConteiner } from './style';

export default function ModalConfirmedAdd({setTest, modalConfirmedAdd, setModalConfirmedAdd}) {
  return (
    <Modal
    animationType= "fade"
    transparent={true}
    visible={modalConfirmedAdd}
    onRequestClose={() => {setTest(false), setModalConfirmedAdd(false)}}>
        <Conteiner>
            <Icon name='checkmark-circle-outline' style={{color: 'black', alignSelf: 'center', top: 20}} size={40}/>
            <TextBold style={{color: 'black', alignSelf: 'center', top: 20}}>Lista atualizada com sucesso!</TextBold>
            <OkButtonConteiner>
                <TouchableOpacity style={{top: 3}} onPress={() => {setTest(false), setModalConfirmedAdd(false)}}>
                    <TextBold style={{color: 'white', alignSelf: 'center'}}>OK</TextBold>
                </TouchableOpacity>
            </OkButtonConteiner>
        </Conteiner>
      
    </Modal>
  );
}