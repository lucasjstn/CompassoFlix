import React, {useEffect, useState, memo} from 'react';
import {ActivityIndicator, FlatList, View, LogBox} from 'react-native';
import FilmesCP from './FlatListComponent/FlatlistComponent';
import styles from './style';
import {FilmesHeader} from '../HeaderFilms/HeaderCP';
import {api} from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../../components/Loading';

export default function FlatFilmes() {
  const [scroll, setScroll] = useState(true);
  const [movies, SetMovies] = useState('');
  const [pagina, SetPagina] = useState(1);
  const [metaNames, setMetaNames] = useState({
    name: undefined,
    username: 'none',
  });
  const [load, setLoad] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage?.getItem('@session');
      if (value !== null) {
        getUser(value);
      }
    } catch (e) {
      console.log('storege: ' + e);
    }
  };

  const getUser = async sessionId => {
    const res = await api.get(`/account?&session_id=${sessionId}`);
    try {
      setMetaNames({name: res?.data?.name, username: res?.data?.username});
    } catch (error) {
      console.log('api: ' + error);
    }
  };

  const scrollLoad = () => {
    if (scroll) return null;

    setScroll(true);
    SetPagina(prev => prev + 1);
  };

  const getMovies = async () => {
    await api
      .get(`/movie/popular?&language=pt-BR&page=${pagina}`)
      .then(res => {
        const current = res.data.results;
        SetMovies(prev => [...prev, ...current]);
      })
      .catch(err => console.log(`Opa, erro nisso aqui ${err}`))
      .finally(() => {
        setScroll(false)
        setLoad(false)
      });
  };

  useEffect(() => {
    if (scroll) setTimeout(() => getMovies(), 3000);
  }, [pagina]);

  useEffect(() => {
    getData();
  }, []);

  return load ? (
    <Loading />
  ) : (
    <View style={styles.conteinerBackGround}>
      <FilmesHeader name={metaNames.name} userName={metaNames.username} />
      <View style={styles.conteinerFlatList}>
        <FlatList
          data={movies}
          renderItem={({item}) => <FilmesCP {...item} />}
          keyExtractor={(_, index) => index}
          numColumns={4}
          ListFooterComponent={<ActivityIndicator color={'red'} />}
          onEndReached={scrollLoad}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
}
