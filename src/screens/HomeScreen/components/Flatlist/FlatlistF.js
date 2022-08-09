import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FilmesCP from "./FlatListComponent/FlatlistComponent";
import styles from './style'
import { FilmesHeader } from "../HeaderFilms/HeaderCP";
import { api } from "../../../../service/api";

export default function FlatFilmes(){
    const navigation = useNavigation()
    const numColumns = 4;
    const [movies, SetMovies] = useState('')
    const [pagina, SetPagina] = useState(1)
    
    const getMovies = async () =>{
        await api.get(`/movie/popular?&language=pt-BR&page=${pagina}`)
    .then((res) => {
        const current = res.data.results
        SetMovies(prev => [...prev, ...current])
        SetPagina(prev => prev + 1)
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
                ListFooterComponent={<ActivityIndicator color={'red'}/>}
                onEndReached={getMovies}
                onEndReachedThreshold={0.01}
                />
            </View>
        </View>
    );
}