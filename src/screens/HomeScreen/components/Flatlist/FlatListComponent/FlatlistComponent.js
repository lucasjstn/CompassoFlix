import React, {memo} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {apiImage} from '../../../../../service/api';
import {useNavigation} from '@react-navigation/native';
import { TextRegular } from '../../../../../components/Text';


const FilmesCP = memo(({vote_average, poster_path, id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conteinerImage}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {id: id});
        }}>
        <Image
          source={{uri: `${apiImage.defaults.baseURL}/w185${poster_path}`}}
          style={styles.Img}
        />
      </TouchableOpacity>
      <Icon name="star" color={'red'} size={10} style={styles.icon} />
      <TextRegular style={styles.note}>{`${vote_average}/10`}</TextRegular>
    </View>
  );
});

export default FilmesCP;
