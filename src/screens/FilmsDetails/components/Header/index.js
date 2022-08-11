import React, {useState, useEffect, useReducer} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {apiImage} from '../../../../service/api';
import transformInAround from './transformInAround';
import ImgWindow from './ImgWindow';
const baseUrl = apiImage.defaults.baseURL;

export default FilmsDetails = ({
  id,
  title,
  runtime,
  backdrop_path,
  poster_path,
  popularity,
  vote_average,
  release_date,
  director,
  min,
  directorBy,
  directorDefault,
}) => {
  const [information, setInformation] = useState(0);
  const [press, setPress] = useReducer(press => !press, false);
  const [modalVisible, setModalVisible] = useReducer(
    modalVisible => !modalVisible,
    false,
  );

  const searchPeople = array => {
    return array?.filter(obj => obj?.job === 'Director');
  };

  useEffect(() => {
    if (title?.length > 14) {
      setInformation(1);
      setTimeout(() => setInformation(0), 1500);
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
          source={{uri: `${baseUrl}/original${backdrop_path}`}}
          style={styles.poster}
        />

        <TouchableOpacity
          style={styles.frontCoverBtn}
          activeOpacity={0.6}
          onPress={setModalVisible}>
          <Image
            source={{uri: `${baseUrl}/w500${poster_path}`}}
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
                <Text style={styles.popUpTitle}>
                  Pressione para mostrar o título completo
                </Text>
                <View style={styles.bottomPopUp}></View>
              </View>

              <View style={[styles.popUpWrapper, {opacity: press ? 1 : 0}]}>
                <Text style={styles.popUpTitle}>{title}</Text>
                <View style={styles.bottomPopUp}></View>
              </View>

              <Text
                onLongPress={setPress}
                onPressOut={setPress}
                style={styles.frontCoverTitle}>
                {title?.length < 14 ? title : `${title?.slice(0, 14)}...`}
                <Text style={styles.frontCoverLaunch}>
                  {' '}
                  {release_date?.slice(0, 4)}
                </Text>
              </Text>
            </View>

            <Text style={styles.frontCoverMin}>
              {runtime} {min}
            </Text>
          </View>

          <Text style={styles.directorText}>
            {directorBy}{' '}
            <Text style={{fontWeight: '700'}}>
              {searchPeople(director)?.[0]?.name || directorDefault}
            </Text>
          </Text>

          <View style={styles.ratingWrapper}>
            <Text style={styles.rating}>{vote_average?.toFixed(1)}/10</Text>

            <View style={styles.votesWrapper}>
              <Icon name="favorite" size={30} color="red" />

              <Text style={styles.votesText}>
                {transformInAround(popularity)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
