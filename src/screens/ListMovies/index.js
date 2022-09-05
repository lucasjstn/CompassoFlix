/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
import IconReturn from 'react-native-vector-icons/AntDesign';
import Toggle from 'react-native-toggle-element';
import IconEye from 'react-native-vector-icons/Ionicons';
import IconPencil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Octicons';
import {list} from './mock/listOfItems';
import BtnGoBack from '../../components/BtnGoBack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  ListOfSelectedMovies,
  RemoveMovieFromList,
} from '../../service/requests/ContentRequest/MoviesRequest';
import {api} from '../../service/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from '@react-native-material/core';
export default function ListMovies() {
  const navigation = useNavigation();

  const [toggleValue, setToggleValue] = useState(false);
  const [setModal] = useState(false);
  const [sessionId, setSessionId] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    b();
    d();
  }, []);

  // console.log('data: ', data);
  // console.log('session_id', data);

  async function b() {
    //trocar esse id da lista hard coded pra parametros recebidos da outra tela
    const result = await ListOfSelectedMovies(8216011);
    if (result) {
      setData(result);
    }
  }

  async function d() {
    const result = await AsyncStorage.getItem('@session');
    if (result) {
      setSessionId(result);
    }
  }

  const c = async id => {
    await api
      .post(`/list/8216011/remove_item?&session_id=${sessionId}`, {
        media_id: id,
      })
      .then(res => console.log('funcionou: ', res.data))
      .catch(error =>
        console.log(error.response.data, Object.keys(error?.response)),
      );
    b();
  };


  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <BtnGoBack
        modal={() => navigation.navigate('ProfileScreen')}
        style={{top: 20, left: 20, position: 'absolute'}}
      />
      {
        <View style={{flexDirection: 'row', left: 200}}>
          <Text style={{color: 'green'}}>{list.items[1].id}</Text>
        </View>
      }
      <View>
        <Toggle
          value={toggleValue}
          onPress={newState => {
            setToggleValue(newState);
          }}
          containerStyle={styles.toggleContainer}
          trackBarStyle={styles.trackBarStyle}
          trackBar={styles.trackBar}
          thumbButton={styles.thumbButton}
          animationDuration={250}
          leftComponent={
            <IconEye
              name={'eye'}
              size={14}
              color={toggleValue ? '#000' : '#FFF'}
            />
          }
          rightComponent={
            <IconPencil
              name={'pencil'}
              size={18}
              color={toggleValue ? '#FFF' : '#000'}
            />
          }
        />
      </View>

      <Text style={styles.nameList}>Filmes que mudaram a minha vida</Text>

      <Text style={styles.descriptionList}>
        Essa é uma lista de filmes que vai mudar a sua vida e gerar reflexão
        sobre diversos temas. Aproveite para unir o útil ao agradável e usar seu
        tempo livre para conhecer histórias inspiradoras.
      </Text>
      {/* <TouchableOpacity
        onPress={() => {
          c(18);
        }}>
        <Text style={{color: 'green'}}>Teste</Text>
      </TouchableOpacity> */}
      {/* <Text style={styles.descriptionList}>{typeof list.items}</Text> */}
      <View style={styles.favoriteMoviesWrapper}>
        {true ? (
          data.map((item, index) => (
            <>
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate('TelaStack', {
                //     screen: 'Details',
                //     params: {id: item.id},
                //   })
                // }
                key={index}
                style={{backgroundColor: 'blue'}}>
                <Text style={{color: 'green'}}>{item.id}</Text>

                <Image
                  key={index}
                  testID="capa do filme"
                  source={{
                    uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
                  }}
                  style={styles.favoriteImageWrapper}
                />
                {/* <View
                  style={{
                    backgroundColor: 'blue',
                    width: 200,
                    height: 200,
                    position: 'absolute',
                  }}></View> */}
                {toggleValue && (
                  <TouchableOpacity
                    key={index + 1}
                    style={styles.delete}
                    onPress={() => {
                      c(item.id);
                      // setModal(true);
                    }}>
                    <Icon name={'horizontal-rule'} size={6} color={'red'} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </>
          ))
        ) : (
          <ActivityIndicator size={30} color={'white'} />
        )}

        {/* <View
            style={{
              backgroundColor: 'black',
              height: 200,
              width: '100%',
            }}></View> */}
      </View>

      {/* alignItems */}
    </View>
  );
}
