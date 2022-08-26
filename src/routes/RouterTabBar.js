import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tela from './HomeStack.js';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SeriesStack from './SeriesStack.js';
import ProfileScreen from '../screens/ProfileScreen/index.js';

const height = Dimensions.get('screen').height;
const tabBarHeight = 0.08; //valor em porcentagem 0.08 = 8%

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="TelasFilmes"
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          height: Math.round(height * tabBarHeight),
          backgroundColor: '#454545',
          borderTopColor: 'transparent',
        }
      }}>
      <Tab.Screen
        name="SeriesScreen"
        component={SeriesStack}
        options={{
          tabBarLabel: 'Séries',
          tabBarIcon: ({focused, color}) => (
            <View style={[styles.container, {backgroundColor: focused ? '#E9A6A6' : null} ]}>
              <Icon name="television-play" size={30} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TelasFilmes"
        component={Tela}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: ({focused, color}) => (
            <View style={[styles.container, {backgroundColor: focused ? '#E9A6A6' : null} ]}>
              <Icon name="popcorn" size={30} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused, color}) => (
            <View style={[styles.container, {backgroundColor: focused ? '#E9A6A6' : null} ]}>
              <Icon name="account-circle-outline" size={30} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
