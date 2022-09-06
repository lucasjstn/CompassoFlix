/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextBold, TextRegular} from '../../components/Text';
import {AuthContext} from '../../context/AuthContext';
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
import {KeepToken} from '../../service/storage';
import styles from '../LoginScreen/styles';
import Banner from './components/Banner/index';
import InputGrey from './components/InputGrey';
import {height, width} from './consts';
const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState(false);
  const [view, setView] = useState(0);
  const [requestToken, setRequestToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginAttempting, setLoginAttempt] = useState(false);
  const {valor, isLogged, setIsLogged} = useContext(AuthContext);

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
    const validatedToken = await LoginRequest(username, password, requestToken);
    const createdSessionId = await CreateSession(validatedToken);
    if (validatedToken && createdSessionId) {
      setUsername('');
      setPassword('');
      setRequestToken(validatedToken);
      setLoginAttempt(false);
      KeepToken('@token', validatedToken);
      KeepToken('@session', createdSessionId);
      setIsLogged(true);
    } else {
      setErrorMessage('Usuário ou senha inválidos');
      setLoginAttempt(false);
      return ClearMessage();
    }
  }

  async function getRequestToken() {
    const resultado = await RequestToken();
    setRequestToken(resultado);
  }

  const ClearMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const LoginHandler = () => {
    const isEmpty = isEmptyChecker(username, password);
    const isValidUsername = isValidUsernameChecker(username);
    const isValidPassword = isValidPasswordChecker(password);
    if (isEmpty === false) {
      ClearMessage();
      setErrorMessage('Nenhum dos campos podem estar vazios :(');
      return;
    } else if (isValidUsername === false) {
      setErrorMessage('Insira um usuário válido');
      return ClearMessage();
    } else if (isValidPassword === false) {
      setErrorMessage('O campo de senha deve ter no mínimo 5 caracteres.');
      return ClearMessage();
    }
    getLoginRequest();
    setLoginAttempt(true);
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      behavior="height">
      <View style={[styles.container, {width: width, height: height}]}>
        <Banner loading={isLoading} />

        {isLoading ? (
          <ActivityIndicator
            style={styles.loadingIndicator}
            size={40}
            color={color ? 'blue' : 'red'}
          />
        ) : (
          <>
            <View style={{opacity: view}}>
              <TextBold style={styles.textlogin}>Login</TextBold>
              <TextRegular style={styles.textentrar}>
                Entre na sua conta para continuar.
              </TextRegular>

              <InputGrey
                isPassword={false}
                value={username}
                onChangeText={setUsername}
                errorMessage={errorMessage}
              />
              <InputGrey
                errorMessage={errorMessage}
                isPassword={true}
                value={password}
                onChangeText={setPassword}
              />
              <TextRegular
                style={[
                  styles.textentrar,
                  {
                    top: 5,
                    color: '#EC2626',
                    marginTop: 8,
                  },
                ]}>
                {errorMessage}
              </TextRegular>
              {!loginAttempting ? (
                <TouchableOpacity
                  style={styles.botaologin}
                  onPress={() => {
                    LoginHandler();
                  }}>
                  <TextBold style={styles.botaotexto}>Entrar</TextBold>
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

export default LoginScreen;
