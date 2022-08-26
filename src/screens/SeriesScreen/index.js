import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';
import ContentList from '../../components/ContentList';
import {getContent} from '../../service/requests/ContentRequest/MoviesRequest';
const SeriesScreen = () => {
  const [tv, setTV] = useState('');
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [metaNames, setMetaNames] = useState({
    name: undefined,
    username: 'none',
  });
  const [load, setLoad] = useState(true);
  const content = 'tv';

  useEffect(() => {
    if (scroll) setTimeout(() => getTVSeries(), 3000);
  }, [scroll]);

  useEffect(() => {
    getTVSeries();
  }, []);

  const scrollLoad = () => {
    if (scroll) return null;

    setScroll(true);
    setPage(prev => prev + 1);
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
      <Text style={{color: 'white'}}>asjdajsd</Text>
      <ContentList content={tv} endProp={scrollLoad} stack={"SeriesDetails"}/>
    </SafeAreaView>
  );
};

export default SeriesScreen;
