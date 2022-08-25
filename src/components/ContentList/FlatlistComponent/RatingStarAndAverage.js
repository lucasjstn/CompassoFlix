import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextRegular} from '../../Text';
import styles from './style';
export default function RatingStarAndAverage({vote_average}) {
  return (
    <>
      <Icon name="star" color={'red'} size={10} style={styles.icon} />
      <TextRegular style={styles.note}>{`${vote_average.toFixed(
        1,
      )}/10`}</TextRegular>
    </>
  );
}
