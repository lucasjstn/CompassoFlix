import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FilmesCP from "./FlatListComponent/FlatlistComponent";
import styles from './style'
import { FilmesHeader } from "../HeaderFilms/HeaderCP";
import { api } from "../../../../service/api";

export default function FlatFilmes(){
    const navigation = useNavigation()
    const numColumns = 4;
    const [movies, SetMovies] = useState('')
    
    const getMovies = async () =>{
        await api.get('/movie/popular?&language=pt-BR&page=1')
    .then((res) => {
        SetMovies(res.data.results)
    }).catch(err => console.log(`Opa, erro nisso aqui ${err}`))
    }

    useEffect(() => {
        getMovies()
    }, [])

    const renderItem = ({ item }) => (
        <FilmesCP onPress={() => {
            navigation.navigate("Details", { 
                id: item.id
            })
        }}
        rating={item.vote_average}
        image={item.poster_path}
        />
);

    return (
        <View style={styles.conteinerBackGround}>
            <FilmesHeader/>
            <View style={styles.conteinerFlatList}>
                <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                />
            </View>
        </View>
    );
}