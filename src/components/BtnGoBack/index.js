import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';


export default function BtnGoBack({ nav, name, size, color, style }) {
    return (
        <TouchableOpacity
            onPress={() => {
                nav.goBack()
            }}
            style={style || styles.container}
        >
            <Icon
                name={ name || 'keyboard-arrow-left' }
                size={ size || 30 }
                color={ color || 'black' }
            />
        </TouchableOpacity>
    );
}