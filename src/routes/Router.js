import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SingIn';
import Home from '../screens/HomeScreen';
import Details from '../screens/Details/';
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
                <AuthStack.Navigator>
                    <AuthStack.Screen name="Login" component={SignIn} />
                </AuthStack.Navigator>
            : 
                <AuthStack.Navigator>
                    <AuthStack.Screen name="Home" component={Home}
                    options={{title: null, headerTransparent: true, headerShown: false}}/>
                    <AuthStack.Screen name="Details" component={Details}/>
                </AuthStack.Navigator>
            }
        </NavigationContainer>
    )
}

export default Router;