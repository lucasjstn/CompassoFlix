import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextBold, TextRegular, TextSemiBold } from "../../../components/Text";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api, apiImage } from "../../../service/api";
import { Avatar } from '@react-native-material/core'
import styles from "./style";

export default function SupProfile(){

    const [avatar, setAvatar] = useState('')
    const [nomes, setNomes] = useState({name: undefined, username: 'none'});
    const [id, setId] = useState('')

      const getUsuario = async () => {
        try {
          const value = await AsyncStorage?.getItem('@session');
          if (value !== null) {
            getUser(value);
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
          setId(res.data.id)
        } catch (err) {
          console.log('erro aqui ó: ' + err);
        }
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
                <TextBold style={styles.rate}>30</TextBold>
                <TextRegular style={styles.textRated}>Avaliações</TextRegular>
            </View>
        </View>
    )
}