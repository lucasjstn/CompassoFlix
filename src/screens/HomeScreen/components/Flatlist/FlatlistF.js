import React, {useEffect, useState, memo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  LogBox,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// import FilmesCP from './FlatListComponent/FlatlistComponent';
import styles from './style';
import {FilmesHeader} from '../HeaderFilms/HeaderCP';
import {api} from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../../components/Loading';
import ContentList from '../../../../components/ContentList';
import {getContent} from '../../../../service/requests/ContentRequest/MoviesRequest';
import {KeepToken} from '../../../../service/storage';
import {Avatar} from '@react-native-material/core';
import {apiImage} from '../../../../service/api';
import {useNavigation} from '@react-navigation/native';

export default function FlatFilmes() {
  const navigation = useNavigation();
  const [scroll, setScroll] = useState(false);
  const [movies, setMovies] = useState([]);
  const [pagina, SetPagina] = useState(1);
  const [metaNames, setMetaNames] = useState({
    name: undefined,
    username: 'none',
  });
  const [content, setContent] = useState('movie');
  const [load, setLoad] = useState(true);
  const [avatar, setAvatar] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage?.getItem('@session');
      if (value !== null) {
        api.defaults.params['session_id'] = value;
        getUser();
      }
    } catch (e) {
      console.log('storege: ' + e);
    }
  };

  const getUser = async () => {
    const res = await api.get(`/account?&`);
    try {
      setMetaNames({name: res?.data?.name, username: res?.data?.username});
      await KeepToken('@username', res?.data?.username);
      await KeepToken('@name', res?.data?.name);
      setAvatar(res.data.avatar.tmdb.avatar_path);
    } catch (error) {}
  };

  const scrollLoad = () => {
    if (scroll) return null;

    setScroll(true);
    SetPagina(prev => prev + 1);
  };

  useEffect(() => {
    if (scroll) setTimeout(() => getMovies(), 3000);
  }, [scroll]);

  useEffect(() => {
    getData();
    getMovies();
  }, []);

  async function getMovies() {
    const result = await getContent(content, pagina);
    if (result) {
      setScroll(false);
      setLoad(false);
      setMovies(prev => [...prev, ...result]);
      return;
    }
  }

  function Picture() {
    if (avatar == null) {
      return <Avatar label={metaNames.name || metaNames.username} size={44} />;
    } else {
      return (
        <Avatar
          image={{uri: `${apiImage.defaults.baseURL}/w200${avatar}`}}
          size={44}
        />
      );
    }
  }

  return load ? (
    <Loading />
  ) : (
    <View style={styles.conteinerBackGround}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <TouchableOpacity
        style={styles.picture}
        onPress={() => navigation.navigate('ProfileStack')}>
        <Picture />
      </TouchableOpacity>
      <FilmesHeader name={metaNames.name} userName={metaNames.username} />
      <View style={styles.conteinerFlatList}>
        <ContentList content={movies} endProp={scrollLoad} stack="Details" />
      </View>
    </View>
  );
}
