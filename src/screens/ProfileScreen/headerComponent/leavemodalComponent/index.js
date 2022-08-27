import React, {useState} from 'react';
import {Modal} from 'react-native';
import styles from '../style';
import {View, Pressable} from 'react-native';
import {TextBold, TextRegular} from '../../../../components/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {AuthContext} from '../../../../context/AuthContext';

export default function LeaveMdl({modalActive, setModalActive}) {
  const {isLogged, setIsLogged} = useContext(AuthContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalActive}
      style={{backgroundColor: 'blue'}}
      onRequestClose={() => setModalActive(false)}>
      <View
        style={{
          backgroundColor: 'white',
          width: '80%',
          alignSelf: 'center',
          height: 166,
          marginTop: '74%',
          borderRadius: 25,
          padding: 30,
        }}>
        <TextBold
          style={{
            color: 'black',
            marginBottom: 17,
            fontSize: 14,
            lineHeigth: 21,
          }}>
          Atenção
        </TextBold>
        <TextRegular
          style={{
            color: '#8E8E8E',
            marginBottom: 35,
            fontSize: 13,
            lineHeigth: 20,
          }}>
          Deseja mesmo sair?
        </TextRegular>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Pressable
            style={{
              width: 84,
              backgroundColor: 'black',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent:'center',
              paddingVertical:4
            }}
            onPress={() => setModalActive(false)}>
            <TextBold style={{color: 'white', fontSize: 10, lineHeigth: 15}}>
              CANCELAR
            </TextBold>
          </Pressable>
          <Pressable
            style={{
              width: 84,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent:'center',
              paddingVertical:4
            }}
            onPress={async () => {
              await AsyncStorage.removeItem('@token');
              setIsLogged(false);
            }}>
            <TextBold style={{color: 'black', fontSize: 10, lineHeigth: 15}}>SIM</TextBold>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
