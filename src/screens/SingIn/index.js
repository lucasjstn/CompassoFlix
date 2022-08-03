
import React from "react";
import { TextInput, Image, Text, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from '../SingIn/styles';
import Banner from "./components/Banner/index";
const SignIn = () => {

    return(
<KeyboardAvoidingView style={styles.container} behavior="position" enabled={true}>
      <Banner />
      <Image style={styles.logo} width={231} height={228} source={require('../../../assets/logo.png')}/>
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
      <TouchableOpacity style={styles.botaologin}>
        <Text style={styles.botaotexto}>Entrar</Text>
      </TouchableOpacity>
</KeyboardAvoidingView>

    
    )
}

export default SignIn;