import React from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import styles from './style';

export default function FilmesCP({image, rating}){
    return(
        <View style={styles.conteinerImage}>
            <TouchableOpacity>
                <Image source={image} style={styles.Img}/>
            </TouchableOpacity>
            <Icon name='star' color={'red'} size={10} style={styles.icon}/>
            <Text style={styles.note}>{rating}</Text>
        </View>
    )
}

