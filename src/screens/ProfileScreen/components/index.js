import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Modal} from 'react-native';
import {TextRegular, TextSemiBold} from '../../../components/Text';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {apiImage} from '../../../service/api';
import Loading from '../../../components/Loading';
import BtnGoBack from '../../../components/BtnGoBack';
const baseUrl = apiImage.defaults.baseURL;

export default function TopFiveMovies({
  moviesList,
  isSerie = false,
  isRated = false,
  isLoad,
}) {
  const [toggleUserFavorites, setToggleUserFavorites] = useState(false);

  const toggle = () => {
    return setToggleUserFavorites(!toggleUserFavorites);
  };

  return (
    <>
      <Modal
        visible={toggleUserFavorites}
        onRequestClose={() => setToggleUserFavorites(!toggleUserFavorites)}>
        <View style={styles.userFavoritesContainer}>
          <BtnGoBack modal={toggle} />
          <TextRegular>Eu sou um modal foda</TextRegular>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.topTextsWrapper}>
          <TextSemiBold style={styles.title}>
            {isRated
              ? `Avaliações de ${isSerie ? 'séries' : 'filmes'} recentes`
              : `${isSerie ? 'Séries' : 'Filmes'} Favorit${
                  isSerie ? 'a' : 'o'
                }s`}{' '}
            de John
          </TextSemiBold>
          <TouchableOpacity
            style={styles.seeAllButton}
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
                <View key={index} style={styles.moviesWrapper}>
                  <Image
                    source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                    style={styles.imgWrapper}
                  />
                  <View
                    style={[
                      styles.ratedWrapper,
                      {display: isRated ? 'flex' : 'none'},
                    ]}>
                    <Icon name="star" color={'red'} size={13} />
                    <TextSemiBold style={styles.rated}>
                      {Math.round(item.rating)}/10
                    </TextSemiBold>
                  </View>
                </View>
              );
            })
          )}
        </View>
      </View>
    </>
  );
}
