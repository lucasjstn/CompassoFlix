import React, {useEffect, useState, memo} from 'react';
import {ActivityIndicator, FlatList, View, LogBox} from 'react-native';
import FilmesCP from './FlatListComponent/FlatlistComponent';
import styles from './style';
import {FilmesHeader} from '../HeaderFilms/HeaderCP';
import {api} from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../../components/Loading';
import ContentList from '../../../../components/ContentList';
import {getContent} from '../../../../service/requests/ContentRequest/MoviesRequest';
import {KeepToken} from '../../../../service/storage';

export default function FlatFilmes() {
  const [scroll, setScroll] = useState(false);
  const [movies, setMovies] = useState([]);
  const [pagina, SetPagina] = useState(1);
  const [metaNames, setMetaNames] = useState({
    name: undefined,
    username: 'none',
  });
  const [content, setContent] = useState('movie');
  const [load, setLoad] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage?.getItem('@session');
      if (value !== null) {
        getUser(value);
      }
    } catch (e) {}
  };

  const getUser = async sessionId => {
    const res = await api.get(`/account?&session_id=${sessionId}`);
    try {
      setMetaNames({name: res?.data?.name, username: res?.data?.username});
      await KeepToken('@username', res?.data?.username);
      await KeepToken('@name', res?.data?.name);
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

  // console.log(`movies ${movies[0].adult}`);

  return load ? (
    <Loading />
  ) : (
    <View style={styles.conteinerBackGround}>
      <FilmesHeader name={metaNames.name} userName={metaNames.username} />
      <View style={styles.conteinerFlatList}>
        {/* <FlatList
        data={movies}
        renderItem={({item}) => <FilmesCP {...item} />}
        keyExtractor={(_, index) => index}
        numColumns={4}
        ListFooterComponent={<ActivityIndicator color={'red'} />}
        onEndReached={scrollLoad}
        onEndReachedThreshold={0.2}
      /> */}
        <ContentList content={movies} endProp={scrollLoad} />
      </View>
    </View>
  );
}
