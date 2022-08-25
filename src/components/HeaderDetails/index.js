import React, {useState, useEffect, useReducer} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {apiImage} from '../../service/api';
import transformInAround from './tansformInAround';
import ImgWindow from './ImgWindow';
import {TextBold, TextRegular} from '../Text';
import {pressLongTitle, min} from '../../mocks/Details';
const baseUrl = apiImage.defaults.baseURL;

export default HeaderDetails = ({
  id,
  title,
  runtime,
  isSerie = false,
  director,
  directorBy,
  popularity,
  poster_path,
  vote_average,
  release_date,
  backdrop_path,
  directorDefault,
}) => {
  const [information, setInformation] = useState(false);
  const [press, setPress] = useReducer(press => !press, false);
  const [modalVisible, setModalVisible] = useReducer(
    modalVisible => !modalVisible,
    false,
  );

  const searchPeople = array => {
    return array?.find(obj => obj?.job === 'Director');
  };

  useEffect(() => {
    if (title?.length > 14) {
      setInformation(true);
      setTimeout(() => setInformation(false), 2000);
    }
  }, [title]);

  return (
    <>
      {!!modalVisible && (
        <ImgWindow
          poster_path={poster_path}
          visible={modalVisible}
          setVisible={setModalVisible}
          id={id}
        />
      )}

      <View>
        <Image
          accessibilityHint="banner de fundo"
          source={{uri: `${baseUrl}/w780${backdrop_path}`}}
          style={styles.poster}
        />

        <TouchableOpacity
          accessibilityHint="poster com botao"
          style={styles.frontCoverBtn}
          activeOpacity={0.6}
          onPress={setModalVisible}>
          <Image
            accessibilityHint="poster"
            source={{uri: `${baseUrl}/w342${poster_path}`}}
            style={styles.frontCover}
          />
        </TouchableOpacity>

        <View style={styles.mainWrapper}>
          <View style={styles.mainTextWrapper}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              {information && (
                <View style={styles.popUpWrapper}>
                  <TextBold style={styles.popUpTitle}>
                    {pressLongTitle}
                  </TextBold>
                  <View style={styles.bottomPopUp}></View>
                </View>
              )}

              {press && (
                <View style={styles.popUpWrapper}>
                  <TextBold style={styles.popUpTitle}>{title}</TextBold>
                  <View style={styles.bottomPopUp}></View>
                </View>
              )}

              <TextBold
                onLongPress={setPress}
                onPressOut={setPress}
                style={styles.frontCoverTitle}>
                {isSerie
                  ? title?.length < 17
                    ? title
                    : `${title?.slice(0, 17)}...`
                  : title?.length < 15
                  ? title
                  : `${title?.slice(0, 14)}...`}
                <TextRegular style={styles.frontCoverLaunch}>
                  {' '}
                  {release_date?.slice(0, 4)}
                </TextRegular>
              </TextBold>
            </View>

            {!isSerie && (
              <TextRegular style={styles.frontCoverMin}>
                {runtime} {min}
              </TextRegular>
            )}
          </View>

          <TextRegular style={styles.directorText}>
            {directorBy}{' '}
            <TextBold style={{fontFamily: 'OpenSans-Ligth'}}>
              {isSerie
                ? director?.name ?? directorDefault
                : searchPeople(director)?.name ?? directorDefault}
            </TextBold>
          </TextRegular>

          <View style={styles.ratingWrapper}>
            <TextRegular style={styles.rating}>
              {vote_average?.toFixed(1)}/10
            </TextRegular>

            <View style={styles.votesWrapper}>
              <Icon name="favorite" size={30} color="red" />

              <TextRegular style={styles.votesText}>
                {transformInAround(popularity)}
              </TextRegular>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
