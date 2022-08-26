import React from 'react';
import {View, Image} from 'react-native';
import {TextSemiBold} from '../../../../components/Text';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {apiImage} from '../../../../service/api';
import Loading from '../../../../components/Loading';
const baseUrl = apiImage.defaults.baseURL;

export default function TopFiveMovies({
  moviesList,
  isSerie = false,
  isRated = false,
  isLoad,
}) {
  return (
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
        <TextSemiBold style={styles.seeAll}>Ver tudo</TextSemiBold>
      </View>
      <View style={styles.listMovies}>
        {isLoad ? (
          <Loading style={styles.load} />
        ) : (
          moviesList?.slice(0, 5)?.map((item, index) => {
            return (
              <View key={index} style={styles.moviesWrapper}>
                <Image
                  testID="capa do filme"
                  source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                  style={styles.imgWrapper}
                />
                {isRated && (
                  <View style={[styles.ratedWrapper]}>
                    <Icon
                      name="star"
                      color={'red'}
                      size={13}
                      testID="starIcon"
                    />
                    <TextSemiBold style={styles.rated}>
                      {item.rating.toFixed(1)}/10
                    </TextSemiBold>
                  </View>
                )}
              </View>
            );
          })
        )}
      </View>
    </View>
  );
}