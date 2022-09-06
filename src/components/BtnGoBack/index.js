import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

import {useNavigation} from '@react-navigation/native';

export default function BtnGoBack({name, size, color, style, modal}) {
  const navigation = useNavigation();

  function toNavigate() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity
      onPress={modal ? modal : toNavigate}
      style={[style, styles.container]}>
      <Icon
        name={name || 'keyboard-arrow-left'}
        size={size || 30}
        color={color || 'black'}
      />
    </TouchableOpacity>
  );
}
