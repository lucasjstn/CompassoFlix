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
        api.defaults.params[ 'session_id' ] = value;
        getUser()
      }
    } catch (e) {
      console.log('storege: ' + e);
    }
  };

  const getUser = async () => {
    const res = await api.get(`/account?&`);
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

  // const getMovies = async () => {
  //   await api
  //     .get(`/movie/popular?&language=pt-BR&page=${pagina}`)
  //     .then(res => {
  //       const current = res.data.results;
  //       // console.log(res?.data.results);
  //       setMovies(prev => [...prev, ...current]);
  //     })
  //     .catch(err => console.log(`Opa, erro nisso aqui ${err}`))
  //     .finally(() => {
  //       setScroll(false);
  //       setLoad(false);
  //     });
  // };

  useEffect(() => {
    if (scroll) setTimeout(() => getMovies(), 3000);
  }, [scroll]);

  useEffect(() => {
    getData();
    getMovies();
    // console.log(`movies ${movies}`);
    // getMovies();
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
