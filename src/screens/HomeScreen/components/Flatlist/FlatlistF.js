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

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [sessionId, setSessionId] = useState('')

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@session')
          if(value !== null) {
            setSessionId(value)
          }
        } catch(e) {
          console.log(e)
        }
      }

    const getUser = async () => {
        await api.get(`/account?&session_id=${sessionId}`).then(
            response => {
                //console.log(response.data)
                setName(response?.data?.name)
                setUserName(response?.data?.username)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getUser()
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
            <FilmesHeader name={name} userName={userName}/>
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