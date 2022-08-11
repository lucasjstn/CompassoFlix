import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';


export function FilmesHeader({name, userName}){
    return(
        <View style={styles.distance}>
            <Text style={styles.txt}>Olá, <Text style={styles.user}>{name || userName}</Text>!</Text>
            <Text style={styles.info}>Reveja ou acompanhe os filmes que você assistiu...</Text>
            <Text style={styles.movies}>Filmes populares este mês</Text>
        </View>
    )
}
