import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './style';

const LoadingProfile = ({style}) => (
  <View style={[styles.container, style]}>
    <AnimatedLottieView
      source={require('../../../../../assets/lottieAnimates/loadprofile.json')}
      autoPlay={true}
      loop={true}
    />
  </View>
);

export default LoadingProfile;
