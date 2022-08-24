/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {api} from '../../service/api';
import {TextBold, TextRegular} from '../Text';
import styles from './style';

export default function ModalRating({cancel, isMovie, okHandler, id}) {
  const [rating, setRating] = useState('');
  const [session, setSession] = useState('');
  const [status, setStatus] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    pegarSessionId();
  }, [session]);

  useEffect(() => {
    // console.log(usesRegex(rating));
    switch (status) {
      case 12:
        setErrorMessage('Avaliação atualizada com sucesso!');
        break;
      case 18:
        setErrorMessage('Valor muito alto, insira um valor entre 0 e 10.');
        break;
    }
  }, [rating]);

  function validateRate(rate) {
    let regex = /[.0-9]/;
    if (rate.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (validateRate(rating)) {
      console.log(`true${''}`);
      setErrorMessage('');
    } else if (rating[0] !== '') {
      setRating('');
      setErrorMessage('Insira apenas números.');
    }

    if (rating[0] === '.' || rating[0] == 0) {
      setRating('');
    } else {
    }

    if (rating > 10) {
      setRating('10');
    }
    // if (regex.test(rating) === true) {
    //   return console.log(`true${''}`);
    // }
  }, [rating]);

  async function pegarSessionId() {
    try {
      const result = await AsyncStorage.getItem('@session');
      if (result === null) {
        return '';
      }
      setSession(result);
    } catch (error) {
      console.warn('Erro no storage session', error.data);
    }
  }

  async function sendRating(rate) {
    setStatus(0);
    await api
      .post(
        `/${isMovie ? 'movie' : 'tv'}/${id}/rating?&session_id=${session}`,
        {
          value: rate,
        },
      )
      .then(response => {
        // console.log(`resultado: ${JSON.stringify(res.data)}`);
        // console.log(`${typeof res.data.status_code}`);
        setStatus(response.data.status_code);
      })
      .catch(error => {
        console.log(`erro: ${error.response.data.status_code}`);
        setStatus(error.response.data.status_code);
        // setRating('');
      });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <TextBold style={styles.sendYourRating}>
            Faça a sua avaliação!
          </TextBold>
          {status === 0 ? (
            <ActivityIndicator style={{top: 25}} size={20} color={'red'} />
          ) : (
            <>
              <View style={styles.ratingResourcer}>
                <View style={styles.ratingInputContainer}>
                  <TextInput
                    // editable={disabled}
                    value={rating}
                    onChangeText={text => setRating(text)}
                    style={styles.textInput}
                    numberOfLines={1}
                    maxLength={3}
                  />
                </View>
                <TextBold style={styles.staticInput}>/10</TextBold>
              </View>
              <TextRegular
                style={{fontSize: 11, color: status === 12 ? 'green' : 'red'}}>
                {errorMessage}
              </TextRegular>
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                  onPress={cancel}
                  style={styles.cancelOkButtons}>
                  <TextBold style={styles.cancelOkButtonsText}>
                    CANCELAR
                  </TextBold>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => sendRating(rating)}
                  style={styles.cancelOkButtons}>
                  <TextBold style={styles.cancelOkButtonsText}>OK</TextBold>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
}
