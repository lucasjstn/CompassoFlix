import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela from "./RouterTabBar";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator
            initialRouteName="TelasFilmes"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                headerShown: false,
                tabBarStyle: {
                    height: 54,
                    backgroundColor: '#454545',
                    borderTopColor: 'transparent'
                }
            }}
        >
            <Tab.Screen 
                name="TelasFilmes"
                component={Tela}
                options={{
                    tabBarLabel:'',
                    tabBarIcon: () => (
                        <View style={styles.container}> 
                            <Icon 
                                style={styles.icon}
                                name= "cup"
                                size={30}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9A6A6',
        borderRadius: 25,
        width: 50,
        height: 50,
        top: 10,
    },
    icon: {
        top: 9,
        left: 10
    }
})