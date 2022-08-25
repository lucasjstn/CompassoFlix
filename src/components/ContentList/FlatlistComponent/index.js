import React, {memo} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {apiImage} from '../../../service/api';
import {useNavigation} from '@react-navigation/native';
import {TextRegular} from '../../Text/';
import RatingStarAndAverage from './RatingStarAndAverage';

const ListOfMoviesComponent = memo(({vote_average, poster_path, id}) => {
  const favoriteMovieScreen = false;
  const navigation = useNavigation();
  return (
    <View style={styles.conteinerImage}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {id: id});
        }}>
        <Image
          source={{
            uri: `${apiImage.defaults.baseURL}/original${poster_path}`,
          }}
          style={styles.Img}
        />
      </TouchableOpacity>
      <RatingStarAndAverage vote_average={vote_average} />
    </View>
  );
});

export default ListOfMoviesComponent;
