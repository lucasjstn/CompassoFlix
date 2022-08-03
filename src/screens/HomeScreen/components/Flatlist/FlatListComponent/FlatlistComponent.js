import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function FilmesCP({image, rating}){
    const navigation = useNavigation()
    return(
        <View style={styles.conteinerImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Image source={image} style={styles.Img}/>
            </TouchableOpacity>
            <Icon name='star' color={'red'} size={10} style={styles.icon}/>
            <Text style={styles.note}>{rating}</Text>
        </View>
    )
}

