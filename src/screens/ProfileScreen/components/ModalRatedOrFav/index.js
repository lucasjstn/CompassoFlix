import React from 'react';
import RatingStarAndAverage from '../../../../components/ContentList/FlatlistComponent/RatingStarAndAverage';
import BtnGoBack from '../../../../components/BtnGoBack';
import {Modal, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {TextBold} from '../../../../components/Text';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function ModalRatedOrFav({
  toggleUserFavorites,
  toggle,
  favoriteMovies,
  name,
  username,
  moviesList,
  isRated,
  baseUrl,
  setToggleUserFavorites,
}) {
  const navigation = useNavigation();
  return (
    <Modal
      visible={toggleUserFavorites}
      onRequestClose={() => setToggleUserFavorites(!toggleUserFavorites)}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView>
          <TouchableOpacity style={styles.touchableWrapper}></TouchableOpacity>

          <BtnGoBack modal={toggle} />
          <View
            key={'greetingContainer'}
            style={
              favoriteMovies
                ? styles.greetingContainer
                : styles.greetingContainerRated
            }>
            <TextBold style={styles.greetingText}>
              {favoriteMovies
                ? [
                    'Filmes favoritos de  ',
                    <TextBold
                      key={'greeting'}
                      style={styles.greetingTextUserName}>
                      {name || username}
                    </TextBold>,
                    <TextBold key={'favoriteRate'} style={styles.greetingText}>
                      !
                    </TextBold>,
                  ]
                : [
                    'Avaliações de filmes recentes de ',
                    <TextBold
                      key={'greetingRate'}
                      style={styles.greetingTextUserName}>
                      {name || username}
                    </TextBold>,
                    <TextBold
                      key={'rateExclamatin'}
                      style={styles.greetingText}>
                      !
                    </TextBold>,
                  ]}
            </TextBold>
          </View>
          <View style={[styles.favoriteMoviesWrapper]}>
            {moviesList?.map((item, index) => (
              <TouchableOpacity
                style={null}
                key={index}
                onPress={() => {
                  navigation.navigate('Details', {id: moviesList[index]?.id});
                }}>
                <Image
                  source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                  style={styles.favoriteImageWrapper}
                />
                {isRated ? (
                  <RatingStarAndAverage
                    vote_average={Number(item.rating) === 10 ? 10 : item.rating}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
