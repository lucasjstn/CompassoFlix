import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function Dropdown() {
  const [drop, setDrop] = useState(false);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <TouchableOpacity
        style={[
          {borderBottomColor: drop ? '#E9A6A6' : 'rgba(255, 255, 255, 0.8)'},
          styles.container,
        ]}
        onPress={() => setDrop(!drop)}
      >
        <Text style={styles.temporada}>Temporada</Text>
        <Animated.View>
          <Icon style={styles.icon} size={40} color={'white'} name={'chevron-down'}/>
        </Animated.View>
      </TouchableOpacity>
      {drop && (
        <View style={styles.containerEpisode}>
          {lista.episodes.map((item, index) => {
            return (
              <View key={index} style={styles.episode}>
                <Text style={styles.títuloEpisode}>
                  T01 | E0{item.episode_number}
                </Text>
                <Text style={styles.nameEpisode}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const lista = {
  _id: '5d1a381d30aa3139e7c54c31',
  air_date: '2022-08-05',
  episodes: [
    {
      air_date: '2022-08-05',
      episode_number: 1,
      id: 3762168,
      name: 'Sleep of the Just',
      overview:
        'While searching for an escaped nightmare in the waking world, Morpheus falls prey to Roderick Burgess, an occultist looking to summon and imprison Death.',
      production_code: 'T13.22351',
      runtime: 54,
      season_number: 1,
      show_id: 90802,
      still_path: '/k0LvYwVcJYOq7YmABqXs41HWBEr.jpg',
      vote_average: 7.7,
      vote_count: 34,
    },
    {
      air_date: '2022-08-05',
      episode_number: 2,
      id: 3762169,
      name: 'Imperfect Hosts',
      overview:
        'Morpheus begins his quest to find his tools of power — his sand, ruby and helm — by paying a visit to a pair of notoriously dysfunctional brothers.',
      production_code: '',
      runtime: 37,
      season_number: 1,
      show_id: 90802,
      still_path: '/dGsvL1VEcpSirQK9fHmv1IsjUG2.jpg',
      vote_average: 6.5,
      vote_count: 15,
    },
    {
      air_date: '2022-08-05',
      episode_number: 3,
      id: 3762170,
      name: 'Dream a Little Dream of Me',
      overview:
        'Morpheus tracks down the last-known person in possession of his sand — and receives an unexpected lesson on humanity. Ethel pays a visit to her son.',
      production_code: '',
      runtime: 45,
      season_number: 1,
      show_id: 90802,
      still_path: '/tge5yBQKktKmsvtqoXWBYndAwxW.jpg',
      vote_average: 6.8,
      vote_count: 13,
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: '90%',
    height: 43,
    marginBottom: 10,
    borderBottomWidth: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center',
  },
  temporada: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    left: 20,
  },
  episode: {
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    width: '90%',
    height: 43,
    alignSelf: 'center',
  },
  títuloEpisode: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    left: 20,
    fontWeight: 'bold',
  },
  nameEpisode: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    left: 20,
  },
  icon: {
    position: 'absolute',
    marginLeft: 115,
    
  }
});
