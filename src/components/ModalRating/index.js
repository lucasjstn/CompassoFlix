/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Modal, TextInput, TouchableOpacity, View} from 'react-native';
import {TextBold} from '../Text';
import styles from './style';

export default function ModalRating({cancel, isMovie, okHandler}) {
  const [rating, setRating] = useState('');

  function sendRating() {
    setRating('');
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <TextBold style={styles.sendYourRating}>
            Faça a sua avaliação!
          </TextBold>
          <View style={styles.ratingResourcer}>
            <View style={styles.ratingInputContainer}>
              <TextInput
                value={rating}
                onChangeText={text => setRating(text)}
                style={styles.textInput}
              />
            </View>
            <TextBold style={styles.staticInput}>/10</TextBold>
          </View>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity onPress={cancel} style={styles.cancelOkButtons}>
              <TextBold style={styles.cancelOkButtonsText}>CANCELAR</TextBold>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={sendRating}
              style={styles.cancelOkButtons}>
              <TextBold style={styles.cancelOkButtonsText}>OK</TextBold>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
