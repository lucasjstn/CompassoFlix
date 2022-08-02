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
            <Icon name='star' color={'red'} size={10} style={{top:5}}/>
            <Text style={{fontSize: 10, top: -7, left: 13}}>{rating}</Text>
        </View>
    )
}