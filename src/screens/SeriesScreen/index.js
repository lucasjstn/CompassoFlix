import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import ContentList from '../../components/ContentList';
import {getContent} from '../../service/requests/ContentRequest/MoviesRequest';
import {FilmesHeader} from '../HomeScreen/components/HeaderFilms/HeaderCP';
import {KeepToken} from '../../service/storage';
import {api} from '../../service/api';
const SeriesScreen = () => {
  const [tv, setTV] = useState('');
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [metaNames, setMetaNames] = useState({
    name: '',
    username: '',
  });
  const [load, setLoad] = useState(true);
  const content = 'tv';

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
    } catch (error) {}
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

  return (
    <SafeAreaView style={styles.container}>
      <FilmesHeader
        isSeries={true}
        name={metaNames.name}
        userName={metaNames.username}
      />
      {/* <Text style={{color: 'white'}}>asjdajsd</Text> */}
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
