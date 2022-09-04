/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useReducer} from 'react';
import {View, Image, TouchableOpacity, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {apiImage} from '../../service/api';
import transformInAround from './tansformInAround';
import ImgWindow from './ImgWindow';
import {TextBold, TextRegular} from '../Text';
import {pressLongTitle, min} from '../../mocks/Details';
import ModalRating from '../../components/ModalRating'
import Icone from 'react-native-vector-icons/AntDesign'
import ModalLists from './Modal\'s/ModalList';
import ModalConfirmedAdd from './Modal\'s/ModalConfirmedAdd';
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
  const [information, setInformation] = useState(false);
  const [press, setPress] = useReducer(press => !press, false);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useReducer(
    modalVisible => !modalVisible,
    false,
  );
  const [teste, setTest] = useState(false);
  const [modalConfirmedAdd, setModalConfirmedAdd] = useState(false);

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
        <ModalLists teste={teste} setTest={setTest} movie_id={id} setModalConfirmedAdd={setModalConfirmedAdd}/>
        </>
        <>
        <ModalConfirmedAdd setModalConfirmedAdd={setModalConfirmedAdd} modalConfirmedAdd={modalConfirmedAdd} setTest={setTest}/>
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
                isMovie={true}
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
                  <View style={styles.AddFilmInListWrapper}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => setTest(true)}>
                      <View style={{backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', width: 20, height: 20, alignSelf: 'flex-start', right: 20}}>
                        <Icone name='plus' style={{color:'black'}}/>
                      </View>
                        <Text style={{color: 'black', right: 15, fontSize: 10, top: 3}}>Adicionar a uma lista</Text>
                    </TouchableOpacity>
                  </View>
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
