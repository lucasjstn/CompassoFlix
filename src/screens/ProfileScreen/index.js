import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from './getMovies';
import SupProfile from './headerComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const [isserie, setIsserie] = useState(false)
  const [ses, setSes] = useState(false)
  const [focused, setIsFocused] = useState(false)

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
  return (
    <SafeAreaView style={styles.container}>
      <SupProfile/>
        <TouchableOpacity style={styles.serieIconLocation} onPress={() => {setIsserie(true), setSes(true), setIsFocused(true)}}>
          <Icon name='television-play' style={[styles.iconSeries, {color: focused ? 'white' : null}]} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filmesIconLocation} onPress={() => {setIsserie(false), setSes(false), setIsFocused(false)}}>
          <Icon name='popcorn' style={[styles.iconFilmes, {color: focused ? null : 'white'}]} size={30}/>
        </TouchableOpacity>
      <View style={styles.lineUp}></View>
      <View style={styles.lineDown}></View>
      <View style={styles.lineMid}></View>
      <TopFiveMovies
        moviesList={ses ? seriesFavorite?.results : filmsFavorite?.results}
        isSerie={isserie}
        isLoad={favoriteLoad}
      />
      <View style={styles.line} />
      <TopFiveMovies
        moviesList={ses ? seriesRated?.results : filmsRated?.results}
        isRated={true}
        isSerie={isserie}
        isLoad={ratedLoad}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;