import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {TextBold, TextRegular} from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {apiImage} from '../../service/api';
const baseUrl = apiImage.defaults.baseURL;
import ModalRating from '../ModalRating';

const HeaderDetails = ({
  id,
  backdrop_path,
  poster_path,
  createdBy,
  first_air_date,
  name,
  vote_average,
  vote_count,
  seasons,
  overview,
}) => {
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [toggleLines, setToggleLines] = useState(true);
  console.log(`id: ${id}`);
  const temps = ['primeira temporada', 'segunda temporada'];

  return (
    <>
      <View style={styles.bannerContainer}>
        {
          <Image
            source={{uri: `${baseUrl}/w500${backdrop_path}`}}
            style={styles.bannerContainer}
          />
        }
      </View>
      <View style={styles.coverContainer}>
        <Image
          source={{uri: `${baseUrl}/w500${poster_path}`}}
          style={styles.poster}
        />
        <TouchableOpacity
          style={styles.ratingButton}
          activeOpacity={0.8}
          onPress={() => setRatingModalVisible(true)}>
          <TextBold style={styles.ratingText}>Avalie agora</TextBold>
          {ratingModalVisible ? (
            <Modal
              transparent={true}
              visible={ratingModalVisible}
              onRequestClose={() => setRatingModalVisible(!ratingModalVisible)}>
              <ModalRating
                id={id}
                cancel={() => setRatingModalVisible(!ratingModalVisible)}
                isMovie={false}
                okHandler={() => {}}
              />
            </Modal>
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.titleAndDateContainer}>
        <TextBold numberOfLines={2} style={styles.title}>
          {name}
        </TextBold>
        <TextRegular style={styles.date}>
          {first_air_date?.slice(0, 4)}
        </TextRegular>
      </View>

      <View style={styles.titleAndDateContainer}>
        <TextRegular style={styles.createdBy}>{'Criado por '}</TextRegular>
        <TextBold style={styles.author}>{createdBy?.name}</TextBold>
      </View>

      <TextRegular style={styles.rating}>
        {vote_average?.toFixed(1)}/10
      </TextRegular>

      <View style={styles.ratesInfoContaier}>
        <Icon name="favorite" size={30} color="red" />
        <TextRegular style={styles.numberOfRates}>
          {vote_count > 1000
            ? (vote_count / 1000).toFixed(1) + 'k'
            : vote_count + ''}
        </TextRegular>
      </View>

      <View style={styles.descriptionContainer}>
        <TextRegular
          numberOfLines={toggleLines ? 4 : null}
          style={styles.descriptionText}>
          {overview}
        </TextRegular>
        <Text
          onPress={() => setToggleLines(!toggleLines)}
          style={{color: 'white'}}>
          ver mais.
        </Text>
        {/* <ScrollView> */}
        <View style={styles.seasonsContainer}>
          {seasons?.map(item => {
            return (
              <View style={styles.season}>
                <TextRegular style={{color: 'white'}}>{item.name}</TextRegular>
              </View>
            );
          })}
        </View>
        {/* </ScrollView> */}
      </View>
      {/* <TextBold style={{color: 'white'}}>askdaskdska</TextBold> */}
    </>
  );
};

export default HeaderDetails;
