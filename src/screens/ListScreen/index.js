import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity, View, Modal} from 'react-native';
import {TextBold, TextRegular} from '../../components/Text';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateList from './components/CreateList';
import {api} from '../../service/api';
import {AuthContext} from '../../context/AuthContext';
import styles2 from './components/DeleteList/style';

export default function ListScreen({navigation}) {
  const {listUpdate, setListUpdate} = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);
  const [meta, setMeta] = useState({});
  const [firstRender, setFirstRender] = useState(true);
  const [deletelistModal, setDeleteListModal] = useState(false)
  const [teste , setTeste] = useState()

  const getList = async () => {
    try {
      const response = await api.get('/account/13768649/lists');
      setMeta(response.data);
    } catch (error) {
      console.log('failed request getList: ' + error);
    }
  };
  const deleteList = id => {
    api
      .delete(`/list/${id}?&`)
      .then(response => response)
      .catch(err => console.log(err))
      .finally(() => setListUpdate(Math.random()));
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (!firstRender) {
      getList();
    }
    setFirstRender(false);
  }, [listUpdate]);

  return (
    <>
      <CreateList modalActive={modalActive} setModalActive={setModalActive} />
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <TextBold style={styles.title}>Minhas listas</TextBold>
          }
          style={{width: '100%'}}
          data={meta?.results}
          keyExtractor={(_, index) => index}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <TouchableOpacity
                  style={styles.btnList}
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('ListMovies', {
                      meta: item,
                    });
                  }}>
                  <TextRegular style={styles.listTitle}>
                    {item?.name}
                  </TextRegular>
                  <TextBold style={styles.totalFilms}>
                    {item?.item_count} {item?.item_count == 1 ? 'Filme' : 'Filmes'}
                  </TextBold>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setDeleteListModal(true);
                    setTeste(item.id)
                  }}
                  activeOpacity={0.8}
                  style={styles.btnDelete}>
                  <Icon
                    name="delete"
                    size={20}
                    color="rgba(236, 38, 38, 0.61)"
                  />
                </TouchableOpacity>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={deletelistModal}
                  onRequestClose={() => {
                    setModalActive(false);
                  }}>
                  <View style={styles.containerModal}>
                    <TextBold style={styles.txtModal}>Deseja mesmo excluir essa lista?</TextBold>
                    <View style={styles.btnWrapper}>
                      <TouchableOpacity
                        onPress={() => {setDeleteListModal(false)}}
                        style={[styles.btnSave, styles.btnCancel]}>
                        <TextBold style={[styles.btnSaveText, styles.btnCancelText]}>
                          Cancelar
                        </TextBold>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {;
                          setDeleteListModal(false);
                          deleteList(teste);
                          getList();
                        }}
                        style={styles.btnSave}>
                        <TextBold style={styles.btnSaveText}>EXCLUIR!</TextBold>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            );
          }}
        />
        <BtnGoBack style={styles.goBack} />
        <TouchableOpacity
          onPress={() => setModalActive(!modalActive)}
          activeOpacity={0.7}
          style={{
            width: 51,
            height: 51,
            backgroundColor: '#E9A6A6',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 42,
            bottom: 30,
            elevation: 10,
          }}>
          <Icon name="plus" color="black" size={45} />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
