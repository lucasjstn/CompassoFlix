import React, {useState, useContext} from 'react';
import styles from './style';
import {View, Modal, TextInput, TouchableOpacity} from 'react-native';
import {TextBold} from '../../../../components/Text';
import {api} from '../../../../service/api';
import {AuthContext} from '../../../../context/AuthContext';
export default function CreateList({modalActive, setModalActive}) {
  const {setListUpdate} = useContext(AuthContext);
  const [titleList, setTitleList] = useState('');
  const [descriptionList, setDescriptionList] = useState('');
  const postNewList = async () => {
    try {
      const response = await api.post('/list', {
        name: titleList,
        description: descriptionList,
        language: 'pt-BR',
      });
      setListUpdate(response.data.list_id);
    } catch (error) {
      throw new Error(`request failed from post creat list: ${error}`);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalActive}
      onRequestClose={() => setModalActive(false)}>
      <View style={styles.container}>
        <TextBold style={styles.newList}>Nova lista</TextBold>
        <TextInput
          onChangeText={value => setTitleList(value)}
          placeholder="Nome da lista"
          placeholderTextColor={'rgba(142, 142, 142, 0.5)'}
          style={styles.titleInput}
        />
        <TextInput
          multiline={true}
          onChangeText={value => setDescriptionList(value)}
          placeholder="Descrição"
          placeholderTextColor={'rgba(142, 142, 142, 0.5)'}
          style={styles.descriptionInput}
        />
        <View style={styles.btnWrapper}>
          <TouchableOpacity 
          onPress={() => setModalActive(false)}
          style={[styles.btnSave, styles.btnCancel]}>
            <TextBold style={[styles.btnSaveText, styles.btnCancelText]}>Cancelar</TextBold>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if(titleList && descriptionList) {
                postNewList();
                setTitleList('');
                setDescriptionList('');
              }
              setModalActive(false);
            }}
            style={styles.btnSave}>
            <TextBold style={styles.btnSaveText}>Salvar</TextBold>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
