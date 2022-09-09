import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';
import ContentList from '../../components/ContentList';
import {getContent} from '../../service/requests/ContentRequest/MoviesRequest';
import {FilmesHeader} from '../HomeScreen/components/HeaderFilms/HeaderCP';
import {KeepToken} from '../../service/storage';
import {api} from '../../service/api';
import { Avatar } from '@react-native-material/core'
import { apiImage } from '../../service/api';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading';

const SeriesScreen = () => {
  const navigation = useNavigation();
  const [tv, setTV] = useState('');
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [metaNames, setMetaNames] = useState({
    name: '',
    username: '',
  });
  const [load, setLoad] = useState(true);
  const content = 'tv';
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (scroll) setTimeout(() => getTVSeries(), 3000);
  }, [scroll]);

  useEffect(() => {
    getTVSeries();
    getUser();
  }, []);

  const scrollLoad = () => {
    if (scroll) return null;

    setScroll(true);
    setPage(prev => prev + 1);
  };

  const getUser = async () => {
    const res = await api.get(`/account?&`);
    try {
      setMetaNames({name: res?.data?.name, username: res?.data?.username});
      setAvatar(res.data.avatar.tmdb.avatar_path);
    } catch (error) {
      throw new Error(`failed request get metaNames : ${error}`);
    }
  };

  async function getTVSeries() {
    const result = await getContent(content, page);
    if (result) {
      setScroll(false);
      setLoad(false);
      setTV(prev => [...prev, ...result]);
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

  return load ? (<Loading/>) : (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <TouchableOpacity
        style={styles.picture}
        onPress={() => navigation.navigate('ProfileStack')}>
        <Picture />
      </TouchableOpacity>
      <FilmesHeader
        isSeries={true}
        name={metaNames.name}
        userName={metaNames.username}
      />
      <View style={{top: 150}}>
        <ContentList
          content={tv}
          endProp={scrollLoad}
          stack={'SeriesDetails'}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeriesScreen;
