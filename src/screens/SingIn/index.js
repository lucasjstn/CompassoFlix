import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from '../SingIn/styles';
import Banner from './components/Banner/index';
import {height, width} from './consts';
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState(false);
  const [view, setView] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setColor(!color);
    }, 2000);
  });

  useEffect(() => {
    if (view < 1 && isLoading === false) {
      setTimeout(() => {
        setView(view + 0.07);
        console.log(view);
      }, 0);
    }
    console.log(view);
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled={true}>
      <Banner loading={isLoading} />

      <Image
        style={[styles.logo]}
        width={0.54 * width}
        height={0.25 * height}
        source={require('../../../assets/logo.png')}
      />
      {isLoading ? (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size={40}
          color={color ? 'blue' : 'red'}
        />
      ) : (
        <>
          <View style={{opacity: view}}>
            <Text style={styles.textlogin}>Login</Text>
            <Text style={styles.textentrar}>
              Entre na sua conta para continuar.
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                placeholderTextColor="#ffffff"
                placeholder="e-mail"
                style={styles.emailinput}></TextInput>
              <EvilIcons
                style={{position: 'absolute', left: 100}}
                name="user"
                size={20}
                color={'#ffffff80'}
              />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                placeholderTextColor="#ffffff"
                placeholder="senha"
                secureTextEntry={true}
                style={styles.emailinput}></TextInput>
              <EvilIcons
                style={{position: 'absolute', left: 100}}
                name="lock"
                size={20}
                color={'#ffffff80'}
              />
            </View>
            <TouchableOpacity style={styles.botaologin} onPress={null}>
              <Text style={styles.botaotexto}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default SignIn;
