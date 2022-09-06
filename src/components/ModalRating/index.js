/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {api} from '../../service/api';
import {TextBold, TextRegular} from '../Text';
import styles from './style';

export default function ModalRating({
  cancel,
  isMovie,
  okHandler,
  id,
  contentType,
}) {
  const [rating, setRating] = useState('');
  const [session, setSession] = useState('');
  const [status, setStatus] = useState(-1);
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    pegarSessionId();
  }, [session]);

  useEffect(() => {
    switch (status) {
      case 1:
        setTimeout(cancel, 1000);
        setErrorMessage('Avaliação enviada com sucesso!');
        setRating('');
        break;
      case 12:
        setRating('');
        setErrorMessage('Avaliação atualizada com sucesso!');
        setTimeout(cancel, 1000);
        break;
      case 18:
        setRating('');
        setErrorMessage(
          'Valor muito alto ou inválido, insira um multiplo de 0.5 até 10.',
        );
        break;
    }
  }, [status, cancel]);

  function validateRate(rate) {
    let regex = /^[0-9]*[\.]?[0-9]*$/;
    if (rate.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (rating.length > 0) {
      setStatus(8);
    }
    if (validateRate(rating) === false) {
      setRating('');
      setStatus(18);
      setErrorMessage(
        'Valor muito alto ou inválido, insira um multiplo de 0.5 até 10.',
      );
    } else if (rating[0] !== '') {
      if (rating.length > 1 && rating[0] == '0' && rating[1] == '0') {
        setRating('0.5');
        setErrorMessage('Valor ajustado para um múltiplo de 0.5 mais próximo.');
        setStatus(8);
      } else if (
        rating.length > 1 &&
        rating[0] == '0' &&
        rating[1] !== '.' &&
        rating[1] !== '0'
      ) {
        setStatus(8);
        setRating(`${rating[1]}`);
      }
    }
    if (rating.length > 2) {
      if (rating[2] > 7) {
        setRating(`${Number(rating[0]) + 1}`);
      }
      if (rating[2] <= 7 && rating[2] != 0) {
        setRating(`${Number(rating[0]) + 5 / 10}`);
      }
      setStatus(8);
      setErrorMessage('Valor ajustado para um múltiplo de 0.5 mais próximo.');
    }

    if (rating <= 7 / 10 && rating !== '' && rating.length > 2) {
      setStatus(8);
      setRating('0.5');
    }

    if (rating[0] == '.') {
      setRating('');
      setStatus(11);
      setErrorMessage(
        'Valor muito alto ou inválido, insira um multiplo de 0.5 até 10.',
      );
    }

    if (rating > 10) {
      setRating('10');
      setStatus(8);
      setErrorMessage('Valor ajustado ao máximo permitido.');
    }
  }, [rating]);

  async function pegarSessionId() {
    try {
      const result = await AsyncStorage.getItem('@session');
      if (result === null) {
        return '';
      }
      setSession(result);
    } catch (error) {
      throw new Error(`Erro no storage session: ${error.data}`);
    }
  }

  async function sendRating(rate) {
    if (rate.length === 2 && rate[1] === '.') {
      setStatus(10);
      setRating(rate[0]);
      setErrorMessage(
        'Valor muito alto ou inválido, insira um multiplo de 0.5 até 10.',
      );
    } else {
      setStatus(0);
      await api
        .post(`/${contentType}/${id}/rating?&session_id=${session}`, {
          value: rate,
        })
        .then(response => {
          setStatus(response.data.status_code);
        })
        .catch(error => {
          setStatus(error.response.data.status_code);
          // console.log(error);
        });
    }
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
          ) : status === 12 || status === 1 ? (
            <TextBold style={{color: 'green', top: 30}}>
              {errorMessage}
            </TextBold>
          ) : (
            <>
              <View style={styles.ratingResourcer}>
                <View style={styles.ratingInputContainer}>
                  <TextInput
                    // editable={disabled
                    value={rating}
                    onChangeText={text => setRating(text)}
                    style={styles.textInput}
                    numberOfLines={1}
                    maxLength={rating == 10 ? 2 : 3}
                  />
                </View>
                <TextBold style={styles.staticInput}>/10</TextBold>
              </View>
              <TextRegular
                style={{
                  top: -5,
                  fontSize: 10,
                  color:
                    status === 12 || status === 1
                      ? 'green'
                      : status === 8
                      ? '#F0A329'
                      : 'red',
                }}>
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
                  onPress={status <= 12 ? () => sendRating(rating) : null}
                  style={[
                    styles.cancelOkButtons,
                    {backgroundColor: status <= 12 ? 'black' : 'grey'},
                  ]}>
                  <TextBold
                    style={[styles.cancelOkButtonsText, {color: 'white'}]}>
                    OK
                  </TextBold>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
}
