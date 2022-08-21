import React from 'react';
import {SafeAreaView, View} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from './getMovies';
import {favoriteMovies} from '../../mocks/favoriteMovies';

const ProfileScreen = () => {
  const {data: filmsFavorite, isLoad: favoriteLoad} = getMovies(
    `/account/13768649/favorite/movies?&session_id=`,
  );
  const {data: filmsRated, isLoad: ratedLoad} = getMovies(
    `/account/13768649/rated/movies?&session_id=`,
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopFiveMovies
        moviesList={filmsFavorite?.results}
        isSerie={false}
        isLoad={favoriteLoad}
        favoriteMovies={true}
      />
      <View style={styles.line} />
      <TopFiveMovies
        moviesList={filmsRated?.results}
        isRated={true}
        isSerie={false}
        isLoad={ratedLoad}
        favoriteMovies={false}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
