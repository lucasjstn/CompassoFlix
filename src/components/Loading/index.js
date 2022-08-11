import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './style';

const Loading = () => (
  <View style={styles.container}>
    <AnimatedLottieView
      source={require('../../../assets/lottieAnimates/load.json')}
      autoPlay={true}
      loop={true}
    />
  </View>
);

export default Loading;
