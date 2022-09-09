import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';
import TopFiveMovies from './components/TopFiveMovies';
import styles from './style';
import getMovies from '../FilmsDetails/apiGets';
import SupProfile from './headerComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from '@react-native-material/core';
import LoadingProfile from './components/ProfileLoading';

const ProfileScreen = () => {
  const [isserie, setIsserie] = useState(false);
  const [results, setResults] = useState(false);
  const [focused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [load, setLoad] = useState(true);
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
        setTimeout(() => setLoad(false), 2000);
      }
    } catch (error) {}
  }
  useEffect(() => {
    getAllKeys();
  }, [username, name, filmsFavorite]);

  return (
    <>
      {load ? (
        <LoadingProfile />
      ) : (
        <>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <SafeAreaView style={styles.container}>
            <SupProfile />
            {seriesFavorite && filmsFavorite && seriesRated && filmsRated ? (
              <>
                <View style={styles.lineUp}></View>
                <View style={styles.navWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsserie(false), setResults(false), setIsFocused(false);
                    }}>
                    <Icon
                      name="popcorn"
                      style={{color: focused ? 'grey' : 'white'}}
                      size={30}
                    />
                  </TouchableOpacity>

                  <View style={styles.lineMid} />

                  <TouchableOpacity
                    onPress={() => {
                      setIsserie(true), setResults(true), setIsFocused(true);
                    }}>
                    <Icon
                      name="television-play"
                      style={{color: focused ? 'white' : 'grey'}}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.lineDown}></View>

                <TopFiveMovies
                  moviesList={
                    results
                      ? seriesFavorite?.results.reverse()
                      : filmsFavorite?.results.reverse()
                  }
                  isSerie={isserie}
                  isLoad={favoriteLoad}
                  favoriteMovies={true}
                  username={username}
                  name={name}
                />
                <View style={styles.line} />
                <TopFiveMovies
                  moviesList={
                    results ? seriesRated?.results : filmsRated?.results
                  }
                  isRated={true}
                  isSerie={isserie}
                  isLoad={ratedLoad}
                  username={username}
                  favoriteMovies={false}
                  name={name}
                />
              </>
            ) : (
              <ActivityIndicator color={'red'} size={44} />
            )}
          </SafeAreaView>
        </>
      )}
    </>
  );
};

export default ProfileScreen;
