import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import FilmsDetails from '../screens/FilmsDetails';
import SignIn from '../screens/SingIn';

const Router = () => {
    const [isLogged, setIsLogged] = useState(false);
    
    const AuthStack = createNativeStackNavigator();
    // setIsLogged(false)
    useEffect(() => {
        //mudar de rota é só editar esse setIsLogged pra true.
      setIsLogged(false);  
    }, [])
    ;
    return (
        <NavigationContainer>
            {
            isLogged 
            ?
                <AuthStack.Navigator initialRouteName='Home'>
                    <AuthStack.Screen name="Home" component={Home}/>
                    <AuthStack.Screen name="Details" options={{headerShown: false,}} component={FilmsDetails}/>
                </AuthStack.Navigator>
            : 
                <AuthStack.Navigator>
                    <AuthStack.Screen name="SignIn" options={{headerShown: false,}} component={SignIn} />
                </AuthStack.Navigator>
            } 
        </NavigationContainer>
    )   
}

export default Router;
