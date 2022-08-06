/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  isEmptyChecker,
  isValidPasswordChecker,
  isValidUsernameChecker,
} from '../../service/requests/EntriesValidator';
import {
  CreateSession,
  LoginRequest,
  RequestToken,
} from '../../service/requests/LoginRequest';
import styles from '../SingIn/styles';
import Banner from './components/Banner/index';
import {height, width} from './consts';
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState(false);
  const [view, setView] = useState(0);
  const [requestToken, setRequestToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginAttempting, setLoginAttempt] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setColor(!color);
    }, 2000);
    if (view < 1 && isLoading === false) {
      setTimeout(() => {
        setView(view + 0.07);
      }, 0);
    }
  });

  useEffect(() => {
    if (requestToken === null) {
      getRequestToken();
    } else {
      setIsLoading(false);
    }
  }, [requestToken, loginAttempting]);

  async function getLoginRequest() {
    var createdSessionId = '';
    const validatedToken = await LoginRequest(email, password, requestToken);
    if (validatedToken) {
      createdSessionId = await CreateSession(requestToken);
      setEmail('');
      setPassword('');
      setRequestToken(validatedToken);
      // console.log('   :', validatedToken);
      setErrorMessage('logado');
      setLoginAttempt(false);
      setSessionId(createdSessionId);
      console.log(sessionId);
    } else {
      setErrorMessage('Email ou senha inválidos');
      setLoginAttempt(false);
    }
  }

  async function getRequestToken() {
    const resultado = await RequestToken();
    setTimeout(() => {
      //settimeout so pra garantir que vai mostrar o tratamento do usuário
      if (resultado) {
        setRequestToken(resultado);
        console.log(resultado);
      } else {
      }
    }, 2000); //settimeout so pra garantir que vai mostrar o tratamento do usuário
  }

  const ClearMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const LoginHandler = () => {
    const isEmpty = isEmptyChecker(email, password);
    const isValidUsername = isValidUsernameChecker(email);
    const isValidPassword = isValidPasswordChecker(password);
    console.log(isEmpty);
    if (isEmpty === false) {
      ClearMessage();
      setErrorMessage('Nenhum dos campos podem estar vazios :(');
      return;
    } else if (isValidUsername === false) {
      setErrorMessage('Insira um usuário válido');
      return ClearMessage();
    } else if (isValidPassword === false) {
      setErrorMessage('O campo de senha deve ter no mínimo x caracteres.');
      return ClearMessage();
    }

    getLoginRequest();
    setLoginAttempt(true);
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      behavior="padding">
      <View style={[styles.container, {width: width, height: height}]}>
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
              <Text
                style={[
                  styles.textentrar,
                  {
                    position: 'absolute',
                    top: 20,
                    color: 'red',
                    marginTop: 8,
                  },
                ]}>
                {errorMessage}
              </Text>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                  placeholderTextColor="#ffffff"
                  placeholder="e-mail"
                  style={styles.emailinput}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
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
                  style={styles.emailinput}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={setPassword}
                />
                <EvilIcons
                  style={{position: 'absolute', left: 100}}
                  name="lock"
                  size={20}
                  color={'#ffffff80'}
                />
              </View>
              {!loginAttempting ? (
                <TouchableOpacity
                  style={styles.botaologin}
                  onPress={() => {
                    LoginHandler();
                  }}>
                  <Text style={styles.botaotexto}>Entrar</Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator
                  style={styles.loadingIndicator}
                  size={40}
                  color={color ? 'blue' : 'red'}
                />
              )}
            </View>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
