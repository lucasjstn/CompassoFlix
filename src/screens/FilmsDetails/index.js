import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';

export default FilmsDetails = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <BtnGoBack nav={navigation}/>
            <Header />
            <Synopsis />
            <Cast />
        </SafeAreaView>
    );
}