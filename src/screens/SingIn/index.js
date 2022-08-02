
import React from "react";
import { TextInput, Image, Text, View, TouchableOpacity } from "react-native";
import Banner from "./Banner";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from "./styles";

const SignIn = () => {

    return(

     
    <View style={styles.container}>
      <Banner />
        <Image style={styles.logo} width={231} height={228} source={require('../../assets/logo.png')}/>
      {/* <View> */}

      <Text style={styles.textlogin}>Login</Text>
      <Text style={styles.textentrar}>Entre na sua conta para continuar.</Text>
      <View style={{alignItems: 'center', justifyContent: 'center', }}>
      <TextInput placeholderTextColor='#ffffff' placeholder="e-mail" style={styles.emailinput}></TextInput>
      <EvilIcons style={{position: 'absolute', left: 100}} name='user' size={20} color={'#ffffff80'}/>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', }}>
      <TextInput placeholderTextColor='#ffffff' placeholder="senha" secureTextEntry={true} style={styles.emailinput}></TextInput>
      <EvilIcons style={{position: 'absolute', left: 100}} name='lock' size={20} color={'#ffffff80'}/>
      </View>
      {/* </View> */}
      <TouchableOpacity style={styles.botaologin}>
        <Text style={styles.botaotexto}>Entrar</Text>
      </TouchableOpacity>
      
    </View>
    
    )
}

export default SignIn;