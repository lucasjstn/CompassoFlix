import React, {useState, useEffect} from "react";
import { View, ActivityIndicator} from "react-native";
import { TextBold, TextRegular, TextSemiBold } from "../../../components/Text";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api, apiImage } from "../../../service/api";
import { Avatar } from '@react-native-material/core'
import styles from "./style";

export default function SupProfile(){

    const [avatar, setAvatar] = useState('')
    const [nomes, setNomes] = useState({name: undefined, username: 'none'});
    const [ratedseries, setRatedSerie] = useState()
    const [ratedmovie, setRatedMovie] = useState()
    const [isLoad, setIsLoad] = useState(true);

      const getUsuario = async () => {
        try {
          const value = await AsyncStorage?.getItem('@session');
          if (value !== null) {
            getUser(value);
            getRtSeries(value);
            getRtMovies(value);
          }
        } catch (err) {
          console.log('erro aqui ó: ' + err);
        }
      };
    
      const getUser = async sessionId => {
        const res = await api.get(`/account?&session_id=${sessionId}`);
        try {
          setNomes({name: res?.data?.name, username: res?.data?.username});
          setAvatar(res.data.avatar.tmdb.avatar_path)
        } catch (err) {
          console.log('erro aqui ó: ' + err);
        } 
      };

      const getRtSeries = async sessionId => {
        const res = await api.get(`/account/account_id/rated/tv?&session_id=${sessionId}`);
        try {setRatedSerie(res.data.total_results)} 
        catch (err) {console.log('erro aqui ó: ' + err)}
      };

      const getRtMovies = async sessionId => {
        await api
          .get(`/account/account_id/rated/movies?&session_id=${sessionId}`)
          .then(res => {
            setRatedMovie(res.data.total_results);
          })
          .catch(err => {(`deu erro aqui ô: ${err}`)})
          .finally(() => setIsLoad(false))
      };

      useEffect(() => {
        getUsuario();
      }, []);

      function Picture(){
            if (avatar == null) 
            { return(<Avatar label={nomes.name || nomes.username} size={75}/>)
            }else{
             return(<Avatar image={{uri: `${apiImage.defaults.baseURL}/w200${avatar}`}} size={75}/>)
            }       
      }

    return(
        <View style={styles.conteiner}> 
            <View style={styles.conteinerImg}>
                <Picture/>
            </View>
            <TextBold style={styles.nome}>{nomes.name || nomes.username}</TextBold>
            <View style={styles.ratedConteiner}>
                { isLoad ? (<ActivityIndicator color={'red'}/>)
                :<View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TextBold style={styles.rate}>{ratedseries + ratedmovie}</TextBold>
                    <TextRegular style={styles.textRated}>Avaliações</TextRegular>
                </View>}
            </View>
        </View>
    )
}