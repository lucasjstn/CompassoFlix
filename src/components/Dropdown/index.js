import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextBold, TextRegular} from '../Text';
import styles from './style';
import getMovies from '../../screens/FilmsDetails/apiGets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ({id, path, name}) {
  const [drop, setDrop] = useState(false);

  const {data: episodes} = getMovies(`/tv/${id}/season/${path}?`);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setDrop(!drop);
        }}
        style={styles.btnTemp}>
        <View style={styles.titleWrapper}>
          <TextBold style={styles.titleTemp}>
            {name ?? `Temporada ${episodes?.episodes[0]?.season_number} `}
          </TextBold>
          <Icon
            name={drop ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#FFFFFF"
          />
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.bottomBorder,
          {backgroundColor: drop ? '#E9A6A6' : 'rgba(255, 255, 255, 0.5)'},
        ]}
      />
      {drop &&
        episodes?.episodes.map((item, index) => {
          return (
            <View key={index} style={styles.cardEp}>
              <TextBold style={{color: '#FFFFFF', marginLeft: 13}}>
                T
                {item.season_number < 10
                  ? `0${item.season_number}`
                  : item.season_number}{' '}
                | E
                {item.episode_number < 10
                  ? `0${item.episode_number}`
                  : item.episode_number}
              </TextBold>
              <TextRegular numberOfLines={1} style={styles.overview}>
                {item?.overview}
              </TextRegular>
            </View>
          );
        })}
    </View>
  );
}