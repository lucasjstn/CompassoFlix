import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

export function FilmesHeader(){
    return(
        <View style={styles.distance}>
            <Text>Olá, John!</Text>
            <Text>Reveja ou acompanhe os filmes que você assistiu...</Text>
            <Text>Filmes populares este mês</Text>
        </View>
    )
}
