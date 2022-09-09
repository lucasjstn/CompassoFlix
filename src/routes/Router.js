/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './RouterTabBar';
import LoginScreen from '../screens/LoginScreen';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Banner from '../screens/LoginScreen/components/Banner';
// eslint-disable-next-line no-unused-vars
import {ClearToken} from '../service/storage';
import Loading from '../components/Loading';

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
        <Loading/>
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
        </AuthStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="LoginScreen"
            options={{headerShown: false}}
            component={LoginScreen}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
