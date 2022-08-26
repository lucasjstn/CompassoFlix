import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {TextBold, TextRegular, TextSemiBold} from '../../../../components/Text';

export function FilmesHeader({name, userName, isSeries}) {
  return (
    <View style={styles.distance}>
      <TextBold style={styles.txt}>
        Olá, <TextBold style={styles.user}>{name || userName}</TextBold>!
      </TextBold>
      <TextRegular style={styles.info}>
        Reveja ou acompanhe <TextRegular>{isSeries ? 'a' : 'o'}</TextRegular>s{' '}
        <TextRegular>{isSeries ? 'séries' : 'filmes'}</TextRegular> que você
        assistiu...
      </TextRegular>
      <TextSemiBold style={styles.movies}>
        <TextSemiBold>{isSeries ? 'Séries' : 'Filmes'}</TextSemiBold> populares
        este mês
      </TextSemiBold>
    </View>
  );
}
