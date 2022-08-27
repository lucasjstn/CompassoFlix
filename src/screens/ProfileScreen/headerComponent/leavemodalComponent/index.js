import React, {useState} from 'react';
import {Modal} from 'react-native';
import styles from './style';
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
      onRequestClose={() => setModalActive(false)}>
      <View style={styles.container}>
        <TextBold style={styles.atention}>Atenção</TextBold>
        <TextRegular style={styles.warning}>Deseja mesmo sair?</TextRegular>
        <View style={styles.btnWrapper}>
          <Pressable
            style={styles.btnCancel}
            onPress={() => setModalActive(false)}>
            <TextBold style={styles.btnText}>CANCELAR</TextBold>
          </Pressable>
          <Pressable
            style={[
              styles.btnCancel,
              {
                backgroundColor: 'white',
                borderWidth: 1,
              },
            ]}
            onPress={async () => {
              await AsyncStorage.removeItem('@token');
              setIsLogged(false);
            }}>
            <TextBold style={[styles.btnText, {color:'black'}]}>
              SIM
            </TextBold>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
