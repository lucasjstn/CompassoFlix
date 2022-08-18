import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './style';

const Loading = ({style}) => (
  <View style={[styles.container, style]}>
    <AnimatedLottieView
      source={require('../../../assets/lottieAnimates/load.json')}
      autoPlay={true}
      loop={true}
    />
  </View>
);

export default Loading;
