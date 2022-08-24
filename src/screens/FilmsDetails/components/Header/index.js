import React, {useState, useEffect, useReducer} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {apiImage} from '../../../../service/api';
import transformInAround from './transformInAround';
import ImgWindow from './ImgWindow';
import {TextBold, TextRegular} from '../../../../components/Text';
const baseUrl = apiImage.defaults.baseURL;

export default FilmsDetails = ({
  id,
  min,
  title,
  runtime,
  director,
  directorBy,
  popularity,
  poster_path,
  vote_average,
  release_date,
  backdrop_path,
  directorDefault,
}) => {
  const [information, setInformation] = useState(0);
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
      setInformation(1);
      setTimeout(() => setInformation(0), 2000);
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
          source={{uri: `${baseUrl}/w780${backdrop_path}`}}
          style={styles.poster}
        />

        <TouchableOpacity
          style={styles.frontCoverBtn}
          activeOpacity={0.6}
          onPress={setModalVisible}>
          <Image
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
              <View style={[styles.popUpWrapper, {opacity: information}]}>
                <TextBold style={styles.popUpTitle}>
                  Pressione para mostrar o título completo
                </TextBold>
                <View style={styles.bottomPopUp}></View>
              </View>

              <View style={[styles.popUpWrapper, {opacity: press ? 1 : 0}]}>
                <TextBold style={styles.popUpTitle}>{title}</TextBold>
                <View style={styles.bottomPopUp}></View>
              </View>

              <TextBold
                onLongPress={setPress}
                onPressOut={setPress}
                style={styles.frontCoverTitle}>
                {title?.length < 14 ? title : `${title?.slice(0, 14)}...`}
                <TextRegular style={styles.frontCoverLaunch}>
                  {' '}
                  {release_date?.slice(0, 4)}
                </TextRegular>
              </TextBold>
            </View>

            <TextRegular style={styles.frontCoverMin}>
              {runtime} {min}
            </TextRegular>
          </View>

          <TextRegular style={styles.directorText}>
            {directorBy}{' '}
            <TextBold style={{fontFamily: 'OpenSans-Ligth'}}>
              {searchPeople(director).name || directorDefault}
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
