import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextBold} from '../../components/Text';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';

export default function ListScreen() {
  return (
    <SafeAreaView
      style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <BtnGoBack
        style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 17,
          marginBottom: 35,
        }}
      />
      <TextBold style={{color: 'white', fontSize: 20, lineHeight: 27}}>
        Minhas listas
      </TextBold>
    </SafeAreaView>
  );
}
