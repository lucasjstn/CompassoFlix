import React, { useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from './getMovies';
import SupProfile from './headerComponent';
import Chooses from './tabComponent'

const ProfileScreen = () => {
  const [whatis, setWhatis] = useState('movies')
  const {data: filmsFavorite, isLoad: favoriteLoad} = getMovies(
    `/account/13768649/favorite/${whatis}?&session_id=`,
  );
  const {data: filmsRated, isLoad: ratedLoad} = getMovies(
    `/account/13768649/rated/${whatis}?&session_id=`,
  );
  return (
    <SafeAreaView style={styles.container}>
      <Chooses/>
      <SupProfile/>
      <TopFiveMovies
        moviesList={filmsFavorite?.results}
        isSerie={false}
        isLoad={favoriteLoad}
      />
      <View style={styles.line} />
      <TopFiveMovies
        moviesList={filmsRated?.results}
        isRated={true}
        isSerie={false}
        isLoad={ratedLoad}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;