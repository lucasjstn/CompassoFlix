import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { CommonActions } from '@react-navigation/native';



export default function BtnGoBack({nav, name, size, color, style, modal}) {
  function toNavigate() {
    return nav.dispatch(CommonActions.goBack());
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
