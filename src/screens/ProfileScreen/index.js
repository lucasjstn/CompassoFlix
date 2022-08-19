import React from 'react';
import {SafeAreaView, View} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from '../FilmsDetails/apiGets';

const ProfileScreen = () => {
  const {data: filmsFavorite, isLoad: favoriteLoad} = getMovies(
    `/account/13768649/favorite/movies?&`,
  );
  const {data: filmsRated, isLoad: ratedLoad} = getMovies(
    `/account/13768649/rated/movies?&`,
  );

  return (
    <SafeAreaView style={styles.container}>
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