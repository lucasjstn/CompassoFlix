import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableHighlightBase,
  TouchableHighlight,
  Touchable,
} from 'react-native';
import {TextBold, TextRegular, TextSemiBold} from '../../../components/Text';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {apiImage} from '../../../service/api';
import Loading from '../../../components/Loading';
import BtnGoBack from '../../../components/BtnGoBack';
import ContentList from '../../../components/ContentList';
import {useNavigation} from '@react-navigation/native';
const baseUrl = apiImage.defaults.baseURL;
export default function TopFiveMovies({
  moviesList,
  isSerie = false,
  isRated = false,
  isLoad,
  favoriteMovies,
}) {
  const [toggleUserFavorites, setToggleUserFavorites] = useState(false);
  const navigation = useNavigation();
  const toggle = () => {
    return setToggleUserFavorites(!toggleUserFavorites);
  };

  return (
    <>
      <Modal
        visible={toggleUserFavorites}
        onRequestClose={() => setToggleUserFavorites(!toggleUserFavorites)}>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <ScrollView>
            <TouchableOpacity
              style={styles.touchableWrapper}></TouchableOpacity>

            <BtnGoBack modal={toggle} />
            <View style={styles.greetingContainer}>
              {favoriteMovies ? (
                <>
                  <TextBold style={styles.greetingText}>
                    {'Filmes favoritos do '}
                  </TextBold>
                  <TextBold style={styles.greetingTextUserName}>
                    {'Jhon'}
                  </TextBold>
                  <TextBold style={styles.greetingText}>!</TextBold>
                </>
              ) : null}
            </View>
            <View style={[styles.favoriteMoviesWrapper]}>
              {moviesList?.map((item, index) => (
                <TouchableOpacity style={null} key={index} onPress={() => null}>
                  <Image
                    source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                    style={styles.favoriteImageWrapper}
                  />
                  {/*images adicionais so pra teste*/}
                  <Image
                    source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                    style={styles.favoriteImageWrapper}
                  />
                  <Image
                    source={{uri: `${baseUrl}/w185${item.poster_path}`}}
                    style={styles.favoriteImageWrapper}
                  />
                  {/* <TextRegular style={{color: 'white'}}>
            {index === 0 ? `${Object.keys(item)} + \n` : null}
            {item.original_title}
          </TextRegular> */}
                </TouchableOpacity>
              ))}

              {/* <ContentList content={moviesList} favorite={true} /> */}
            </View>
          </ScrollView>
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
