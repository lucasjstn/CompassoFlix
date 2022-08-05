import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { apiImage } from '../../../../../service/api';

export default function FilmesCP({image, rating, onPress}){
    return(
        <View style={styles.conteinerImage}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{uri: `${apiImage.defaults.baseURL}/original${image}` }} style={styles.Img}/>
            </TouchableOpacity>
            <Icon name='star' color={'red'} size={10} style={styles.icon}/>
            <Text style={styles.note}>{`${rating}/10`}</Text>
        </View>
    )
}

