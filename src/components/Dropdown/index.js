import React, {useState} from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import {TextBold, TextRegular} from '../Text';
import styles from './style';
import getMovies from '../../screens/FilmsDetails/apiGets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ({id, path, name}) {
  const [drop, setDrop] = useState(false);

  const {data: episodes} = getMovies(`/tv/${id}/season/${path}?`);

  const icon = new Animated.Value(0);
  Animated.timing(icon, {
    toValue: 1,
    duration: 300,
    easing: Easing.ease,
    useNativeDriver: false,
  }).start();

  const rotation = {
    transform: [
      {
        rotate: icon.interpolate({
          inputRange: [0, 1],
          outputRange: drop ? ['0deg', '180deg'] : ['180deg', '0deg'],
        })
      }
    ]
  }
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
          <Animated.View style={rotation}>
            <Icon
              name={'chevron-down'}
              size={18}
              color="#FFFFFF"
            />
          </Animated.View>
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