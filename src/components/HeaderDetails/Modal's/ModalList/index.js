import React, {useState, useEffect} from 'react';
import {View, Modal, Text, FlatList, TouchableOpacity} from 'react-native';
import { api } from '../../../../service/api';
import styles from './style';
import { TextBold } from '../../../Text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Icon  from 'react-native-vector-icons/AntDesign';

export default function ModalLists({teste, setTest, movie_id, setModalConfirmedAdd}) {

    const [iduser, setIdUser] = useState();
    const [list, setList] = useState();
    const [ativo, setAtivo] = useState(false);
    const [listas, setListas] = useState();
    const [isSelected, setIsSelected] = useState();
    const [status, setStatus] = useState();

    const getUsuario = async () => {
        try {
          const value = await AsyncStorage?.getItem('@session');
          if (value !== null) {
            getUser(value);
          }
        } catch (err) {
          console.log('erro aqui ó: ' + err);
        }
      };
    
      const getUser = async sessionId => {
        const res = await api.get(`/account?&session_id=${sessionId}`);
        try {
          setIdUser(res?.data?.id)
        } catch (err) {
          console.log('erro aqui ó: ' + err);
        }
      };

      const getList = async () => {
        await api
          .get(`/account/${iduser}/lists`)
          .then(res => {
            setList(res?.data?.results)
          })
          .catch(err => {
            `erro aqui ó: ${err}`;
          })
      };

      const postFilm = async () => {
        await api.post(`/list/${listas}/add_item`, {
            'media_id': movie_id
        }).then(setModalConfirmedAdd(true))
        .catch(err => console.log('deu erro ' + err))
    }

      useEffect(() => {
        getList();
        getUsuario();
      }, []);

      function SelectList(){
        if(listas == undefined){
          return setIsSelected(true), setTimeout(() => setIsSelected(false), 4000)
        }else if(status == true) {
            
        }else{
          return postFilm();
        }
      }

      const getFilmStatus = async () => {
        await api
          .get(`/list/${listas}/item_status?movie_id=${movie_id}`)
          .then(res => {
          setStatus(res.data.item_present);
          })
          .catch(err => {
          `erro aqui ó: ${err}`;
        })
      };
            
      useEffect(() => {
      getFilmStatus();
      });

  return (
    <Modal
    animationType= "slide"
    transparent={true}
    visible={teste}
    onRequestClose={() => setTest(false)}>
      <View style={{height: '50%', top: 390}}>
        <View style={styles.conteiner}>
            <TextBold style={{color: 'black', fontSize: 15, left: 30, top: 10}}>Salvar filme em...</TextBold>
            <TouchableOpacity style={styles.closeButton} onPress={() => setTest(false)}>
              <Icon name='close' style={{color: 'black'}} size={20}/>
            </TouchableOpacity>     
            <View style={styles.line}/>
            <View style={styles.flatlistConteiner}>
                <FlatList
                keyExtractor={item => item.id}
                data={list}
                renderItem={({item}) => 
                      <View style={{marginBottom: 15}}>
                        <View style={styles.listConteiner}>
                          <Text style={{color: 'black',}}>{item.name}</Text>
                          <TouchableOpacity key={item.id} style={styles.selectListButton} onPress={() => {setAtivo(item.id), setListas(item.id)}}>
                            {ativo === item.id ? <View style={{backgroundColor: 'black', height: 15, width: 15, borderRadius: 50}}></View> : <></>}
                          </TouchableOpacity>
                      </View>
                    </View>}
                />
            </View>
            {isSelected ? <TextBold style={{color: 'red', alignSelf: 'center', top: 50}}>Por favor, selecione uma lista.</TextBold> : <></>}
            {status ? <TextBold style={{color: 'red', alignSelf: 'center', top: 50, fontSize: 12}}>Esse filme já foi adicionado nessa lista, selecione outra!</TextBold> : <></>}
            <TouchableOpacity style={styles.saveButton} onPress={() => {SelectList()}}>
              <TextBold style={{color: 'white'}}>SALVAR</TextBold>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
