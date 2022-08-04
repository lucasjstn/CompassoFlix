import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import api from '../../service/api'

export default FilmsDetails = ({ navigation }) => {

    const [titleOrigin, setTitleOrigin] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [tagLine, setTagLine] = useState('')
    const [release, setRelease] = useState('')


    const getDetails = async () => {
        await api.get('/movie/718789?&language=pt-BR')
            .then((res) => {
                setTitleOrigin(res?.data?.original_title)
                setSynopsis(res?.data?.overview)
                setTagLine(res?.data?.tagline)

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <BtnGoBack nav={navigation} />
            <Header title={titleOrigin} />
            <Synopsis overView={synopsis} tagLine={tagLine} />
            <Cast />
            <Button title='entrar' onPress={() => getDetails()} />
        </SafeAreaView>
    );
}

