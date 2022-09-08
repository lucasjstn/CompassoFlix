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
import {TextBold, TextRegular} from '../../components/Text';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default function ListMovies({route}) {
  const {meta} = route.params;
  const navigation = useNavigation();

  const [toggleValue, setToggleValue] = useState(false);
  const [setModal] = useState(false);
  const [sessionId, setSessionId] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    b();
    d();
  }, []);

  async function b() {
    const result = await ListOfSelectedMovies(meta[0].id);
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
      .then(res => res)
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
      <ScrollView>
        {<View style={{flexDirection: 'row', left: 200}}></View>}
        <View
          style={{
            flexDirection: 'row',
            marginTop: '3%',
          }}>
          <BtnGoBack style={styles.goback} modal={() => navigation.goBack()} />
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
        <TextBold style={styles.nameList}>{meta[0].name}</TextBold>
        <TextRegular style={styles.descriptionList}>
          {meta[0].description}
        </TextRegular>
        {data ? (
          <View style={styles.favoriteMoviesWrapper}>
            {list.items.map((item, index) => (
              <TouchableOpacity key={index.toString()}>
                <Image
                  key={index.toString()}
                  testID="capa do filme"
                  source={{
                    uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
                  }}
                  style={styles.favoriteImageWrapper}
                />
                <Image
                  key={index.toString()}
                  testID="capa do filme"
                  source={{
                    uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
                  }}
                  style={styles.favoriteImageWrapper}
                />
                <Image
                  key={index.toString()}
                  testID="capa do filme"
                  source={{
                    uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
                  }}
                  style={styles.favoriteImageWrapper}
                />

                {toggleValue && (
                  <TouchableOpacity
                    key={index.toString() + 'b'}
                    style={styles.deleteButtton}
                    onPress={() => {
                      c(item.id);
                    }}>
                    <Icon name={'horizontal-rule'} size={6} color={'red'} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <ActivityIndicator size={30} color={'red'} />
        )}
        <Text style={{height: height * 0.2}}></Text>
      </ScrollView>
    </View>
  );
}
