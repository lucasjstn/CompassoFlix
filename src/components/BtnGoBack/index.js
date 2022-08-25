import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

export default function BtnGoBack({nav, name, size, color, style, modal}) {
  function toNavigate() {
    return nav.reset({index: 0, routes: [{name: 'Home'}]});
  }

  return (
    <TouchableOpacity
      onPress={modal ? modal : toNavigate}
      style={style || styles.container}>
      <Icon
        name={name || 'keyboard-arrow-left'}
        size={size || 30}
        color={color || 'black'}
      />
    </TouchableOpacity>
  );
}
