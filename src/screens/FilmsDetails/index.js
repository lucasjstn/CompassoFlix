import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import mockFilmsDetails from '../../mocks/filmsDetails';
import apiGets from './apiGets';

export default FilmsDetails = ({ route, navigation }) => {

    const { id } = route.params;
    const { data: dataDetails } = apiGets(`/movie/${id}?&language=pt-BR`)
    const { data: dataCredits } = apiGets(`/movie/${id}/credits?&language=pt-BR`)

    return (
        <SafeAreaView style={styles.container} >
            <BtnGoBack nav={navigation} />
            <Header {...dataDetails} director={dataCredits?.crew} {...mockFilmsDetails.header} />
            <Synopsis {...dataDetails} {...mockFilmsDetails.synopsis} />
            <Cast cast={dataCredits?.cast} {...mockFilmsDetails.cast} />
        </SafeAreaView>
    );
}