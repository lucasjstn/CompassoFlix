import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {TextSemiBold} from '../../../../components/Text';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {apiImage} from '../../../../service/api';
import Loading from '../../../../components/Loading';
import ModalRatedOrFav from '../ModalRatedOrFav';
import {useNavigation} from '@react-navigation/native';
const baseUrl = apiImage.defaults.baseURL;

export default function TopFiveMovies({
  moviesList,
  isSerie,
  isRated = false,
  isLoad,
  favoriteMovies,
  username,
  name,
}) {
  const [toggleUserFavorites, setToggleUserFavorites] = useState(false);

  const navigation = useNavigation();

  const toggle = () => {
    return setToggleUserFavorites(!toggleUserFavorites);
  };

  function navigateToDetails() {
    navigation.navigate(isSerie ? 'SeriesScreen' : 'TelasFilmes', {
      screen: isSerie ? 'SeriesDetails' : 'Details',
      params: {id: moviesList?.id},
    });
  }

  return (
    <>
      <ModalRatedOrFav
        favoriteMovies={favoriteMovies}
        isRated={isRated}
        moviesList={moviesList}
        name={name}
        toggle={toggle}
        toggleUserFavorites={toggleUserFavorites}
        username={username}
        baseUrl={baseUrl}
        setToggleUserFavorites={setToggleUserFavorites}
        navigationHandler={() => navigateToDetails()}
        isSerie={isSerie}
      />

      <View style={styles.container}>
        <View style={styles.topTextsWrapper}>
          <TextSemiBold style={styles.title}>
            {isRated
              ? `Avaliações de ${isSerie ? 'séries' : 'filmes'} recentes`
              : `${isSerie ? 'Séries' : 'Filmes'} Favorit${
                  isSerie ? 'a' : 'o'
                }s`}{' '}
            de {name || username}
          </TextSemiBold>
          <TouchableOpacity
            style={styles.seeAllButton}
            navigationHandler={() => navigateToDetails()}
            onPress={() => setToggleUserFavorites(true)}>
            <TextSemiBold style={styles.seeAll}>Ver tudo</TextSemiBold>
          </TouchableOpacity>
        </View>

        <View style={styles.listMovies}>
          {isLoad ? (
            <Loading style={styles.load} />
          ) : (
            moviesList?.slice(0, 5)?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigateToDetails()}>
                  <View style={styles.moviesWrapper}>
                    <Image
                      testID="capa do filme"
                      source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                      style={styles.imgWrapper}
                    />
                    <View
                      style={[
                        styles.ratedWrapper,
                        {display: isRated ? 'flex' : 'none'},
                      ]}>
                      <Icon
                        testID="starIcon"
                        name="star"
                        color={'red'}
                        size={13}
                      />
                      <TextSemiBold style={styles.rated}>
                        {item.rating?.toFixed(1)}/10
                      </TextSemiBold>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
    </>
  );
}
