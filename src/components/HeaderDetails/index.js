/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useReducer} from 'react';
import {View, Image, TouchableOpacity, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {api, apiImage} from '../../service/api';
import transformInAround from './tansformInAround';
import ImgWindow from './ImgWindow';
import {TextBold, TextRegular} from '../Text';
import {pressLongTitle, min} from '../../mocks/Details';
import ModalRating from '../../components/ModalRating'
import Icone from 'react-native-vector-icons/AntDesign'
import ModalLists from './Modal\'s/ModalList';
import ModalConfirmedAdd from './Modal\'s/ModalConfirmedAdd';
import { AddFilmInListWrapper, TxtFilminList } from './style';
const baseUrl = apiImage.defaults.baseURL;

export default HeaderDetails = ({
  id,
  title,
  runtime,
  isSerie,
  director,
  directorBy,
  popularity,
  poster_path,
  vote_average,
  release_date,
  backdrop_path,
  directorDefault,
}) => {
  const [rated, setRated] = useState([]);
  const [information, setInformation] = useState(false);
  const [press, setPress] = useReducer(press => !press, false);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useReducer(
    modalVisible => !modalVisible,
    false,
  );
  const [selectListModal, setSelectListModal] = useState(false);
  const [modalConfirmedAdd, setModalConfirmedAdd] = useState(false);

  const getUpdate = async () => {
    await api
      .get(`/${isSerie ? 'tv' : 'movie'}/${id}/account_states?&`)
      .then(res => setRated(res?.data))
      .catch(error => console.log(error));
  };

  function after() {
    getUpdate();
    setRatingModalVisible(!ratingModalVisible);
  }

  useEffect(() => {
    getUpdate();
    console.log(rated);
    console.log('é serie: ', isSerie);
  }, []);

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
        <>
        <ModalLists selectListModal={selectListModal} setSelectListModal={setSelectListModal} movie_id={id} setModalConfirmedAdd={setModalConfirmedAdd}/>
        </>
        <>
        <ModalConfirmedAdd setModalConfirmedAdd={setModalConfirmedAdd} modalConfirmedAdd={modalConfirmedAdd} setSelectListModal={setSelectListModal}/>
        </>
        {/* <View> */}
        <TouchableOpacity
          accessibilityHint="poster com botao"
          style={styles.frontCoverBtn}
          activeOpacity={0.9}
          onPress={setModalVisible}>
          <Image
            accessibilityHint="poster"
            source={{uri: `${baseUrl}/w342${poster_path}`}}
            style={styles.frontCover}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={rated?.rated ? styles.alreadyRatedButton : styles.ratingButton}
          activeOpacity={0.8}
          onPress={() => setRatingModalVisible(true)}>
          <TextBold style={styles.ratingText}>
            {rated?.rated
              ? `Sua nota: ${
                  rated?.rated['value'] == 10
                    ? rated?.rated['value']
                    : (rated?.rated['value']).toFixed(1)
                }/10`
              : 'Avalie agora'}
          </TextBold>
          {ratingModalVisible ? (
            <Modal
              transparent={true}
              visible={ratingModalVisible}
              onRequestClose={() => after()}>
              <ModalRating
                id={id}
                cancel={() => after()}
                isMovie={isSerie ? false : true}
                contentType={isSerie ? 'tv' : 'movie'}
                okHandler={() => {}}
              />
            </Modal>
          ) : null}
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
            {isSerie ? <></> :
                  <AddFilmInListWrapper>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => setSelectListModal(true)}>
                      <View style={styles.iconFilmInList}>
                        <Icone testID='plus' name='plus' style={{color:'black'}}/>
                      </View>
                        <TxtFilminList>Adicionar a uma lista</TxtFilminList>
                    </TouchableOpacity>
                  </AddFilmInListWrapper>
                }

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
