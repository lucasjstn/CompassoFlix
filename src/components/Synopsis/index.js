import React, {useReducer} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import {TextRegular} from '../Text';
import { more, seeLess, description, synopsisTitle } from '../../mocks/Details';

export default Synopsis = ({
  overview,
  tagline,
}) => {
  const [aboutName, tradeAboutName] = useReducer(
    aboutName => !aboutName,
    false,
  );

  return (
    <View style={styles.container}>
      <TextRegular style={styles.synopsisTitle}>
        {tagline || synopsisTitle}
      </TextRegular>
      <TextRegular
        numberOfLines={aboutName ? 1000 : 4}
        style={styles.synopsisContent}>
        {overview || description}
      </TextRegular>

      {overview?.length > 227 && (
        <TouchableOpacity onPress={tradeAboutName}>
          <TextRegular style={styles.about}>
            {aboutName ? seeLess : more}
          </TextRegular>
        </TouchableOpacity>
      )}
    </View>
  );
};
