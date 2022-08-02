import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import styles from './style';

export default FilmsDetails = () => {
    return(
        <SafeAreaView>
            <Header />
            <Synopsis />
            <Cast />
        </SafeAreaView>
    );
}