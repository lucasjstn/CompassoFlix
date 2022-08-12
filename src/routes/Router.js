/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import FilmsDetails from '../screens/FilmsDetails';
import SignIn from '../screens/SingIn';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, Image, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Banner from '../screens/SingIn/components/Banner';
import {height, width} from '../screens/SingIn/consts';
import styles from '../screens/SingIn/styles';
import {ClearToken} from '../service/storage';

const Router = () => {
  const {isLogged, setIsLogged, color, setColor} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setColor(!color);
    }, 2000);
  });

  const AuthStack = createNativeStackNavigator();

  useEffect(() => {
    getPersistedToken();
    //caso queira começar da tela de login novamente após logado,
    //1. comente a função getPersistedToken,
    //2. descomente a função ClearToken
    //3. salve o arquivo
    //4. descomente a getPersistedToken e re-abra o app
    //ClearToken('@token');
    //ClearToken('@session');
  }, []);

  const getPersistedToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        setIsLogged(true);
        setIsLoading(false);
        return;
      } else {
        setIsLogged(false);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Banner loading={isLoading} />
        <ActivityIndicator
          style={{top: '15%'}}
          size={40}
          color={color ? 'red' : 'blue'}
        />
        <Image
          style={[styles.logo]}
          width={0.54 * width}
          height={0.25 * height}
          source={require('../../assets/logo.png')}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLogged ? (
        <AuthStack.Navigator initialRouteName="Home">
          <AuthStack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <AuthStack.Screen
            name="Details"
            options={{headerShown: false}}
            component={FilmsDetails}
          />
        </AuthStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="SignIn"
            options={{headerShown: false}}
            component={SignIn}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
