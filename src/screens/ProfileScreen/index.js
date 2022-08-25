import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from './getMovies';
import SupProfile from './headerComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [isserie, setIsserie] = useState(false);
  const [results, setResults] = useState(false);
  const [focused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const {data: filmsFavorite, isLoad: favoriteLoad} = getMovies(
    `/account/13768649/favorite/movies?&session_id=`,
  );
  const {data: filmsRated, isLoad: ratedLoad} = getMovies(
    `/account/13768649/rated/movies?&session_id=`,
  );

  const {data: seriesFavorite} = getMovies(
    `/account/13768649/favorite/tv?&session_id=`,
  );
  const {data: seriesRated} = getMovies(
    `/account/13768649/rated/tv?&session_id=`,
  );

  async function getAllKeys() {
    try {
      const userNameResult = await AsyncStorage.getItem('@username');
      const nameResult = await AsyncStorage.getItem('@name');
      if (userNameResult !== null) {
        setUsername(userNameResult);
        setName(nameResult);
      }
    } catch (error) {}
  }
  useEffect(() => {
    getAllKeys();
  }, [username, name, filmsFavorite]);

  return (
    <SafeAreaView style={styles.container}>
      <SupProfile />
      <View style={styles.lineUp}></View>
      <View style={styles.lineDown}></View>
      <View style={styles.lineMid}>
        <View style={{position: 'absolute'}}>
          <TouchableOpacity
            style={styles.serieIconLocation}
            onPress={() => {
              setIsserie(true), setResults(true), setIsFocused(true);
            }}>
            <Icon
              name="television-play"
              style={[styles.iconSeries, {color: focused ? 'white' : 'grey'}]}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filmesIconLocation}
            onPress={() => {
              setIsserie(false), setResults(false), setIsFocused(false);
            }}>
            <Icon
              name="popcorn"
              style={[styles.iconFilmes, {color: focused ? 'grey' : 'white'}]}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TopFiveMovies
        moviesList={results ? seriesFavorite?.results : filmsFavorite?.results}
        isSerie={isserie}
        isLoad={favoriteLoad}
        favoriteMovies={true}
        username={username}
        name={name}
      />
      <View style={styles.line} />
      <TopFiveMovies
        moviesList={results ? seriesRated?.results : filmsRated?.results}
        isRated={true}
        isSerie={isserie}
        isLoad={ratedLoad}
        username={username}
        favoriteMovies={false}
        name={name}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
