import React, { useState } from "react";
import { Modal } from "react-native";
import styles from "../style";
import { View, Pressable} from "react-native";
import { TextBold, TextRegular } from "../../../../components/Text";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export default function LeaveMdl({modalActive, setModalActive}){

    const {isLogged, setIsLogged} = useContext(AuthContext);

    return(
        <Modal 
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}>
          <View style={styles.leaveModal}>
              <TextBold style={styles.atencaoModal}>Atenção</TextBold>
              <TextRegular style={styles.djsModal}>Deseja mesmo sair?</TextRegular>
              <Pressable style={styles.cancelarModal} onPress={() => setModalActive(false)}>
                <TextBold style={styles.cancelartxt}>CANCELAR</TextBold>
              </Pressable>
              <Pressable style={styles.sairModal} 
              onPress={async () => {
                await AsyncStorage.removeItem('@token');
                setIsLogged(false);
              }}>
                <TextBold style={styles.sairtxt}>SIM</TextBold>
              </Pressable>
          </View>
        </Modal>
    )
}