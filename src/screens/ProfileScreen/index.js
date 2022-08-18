import React from 'react';
import {SafeAreaView, View} from 'react-native';
import TopFiveMovies from './components';
import styles from './style';
import getMovies from './getMovies';
import SupProfile from './headerComponent';

const ProfileScreen = () => {
  const {data: filmsFavorite, isLoad: favoriteLoad} = getMovies(
    `/account/13768649/favorite/movies?&session_id=`,
  );
  const {data: filmsRated, isLoad: ratedLoad} = getMovies(
    `/account/13768649/rated/movies?&session_id=`,
  );
    console.log(ProfileScreen)
  return (
    <SafeAreaView style={styles.container}>
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