import React from 'react';
import { View} from 'react-native';
import styles from './style';
import { TextBold, TextRegular, TextSemiBold } from '../../../../components/Text';


export function FilmesHeader({name, userName}){
    return(
        <View style={styles.distance}>
            <TextBold style={styles.txt}>Olá, <TextBold style={styles.user}>{name || userName}</TextBold>!</TextBold>
            <TextRegular style={styles.info}>Reveja ou acompanhe os filmes que você assistiu...</TextRegular>
            <TextSemiBold style={styles.movies}>Filmes populares este mês</TextSemiBold>
        </View>
    )
}
