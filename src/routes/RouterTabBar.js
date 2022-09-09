import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from './Movies.js';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SeriesStack from './SeriesStack.js';
import ProfileStack from './ProfileStack';

const height = Dimensions.get('screen').height;
const tabBarHeight = 0.08; //valor em porcentagem 0.08 = 8%

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="MovieScreen"
      backBehavior="initialRoute"
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          height: '6.5%',
          backgroundColor: '#454545',
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="SeriesScreen"
        component={SeriesStack}
        options={{
          tabBarLabel: 'Séries',
          tabBarIcon: ({focused, color}) => (
            <View
              style={[
                styles.container,
                {backgroundColor: focused ? '#E9A6A6' : null},
              ]}>
              <Icon name="television-play" size={30} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MovieScreen"
        component={Movies}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: ({focused, color}) => (
            <View
              style={[
                styles.container,
                {backgroundColor: focused ? '#E9A6A6' : null},
              ]}>
              <Icon name="popcorn" size={30} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused, color}) => (
            <View
              style={[
                styles.container,
                {backgroundColor: focused ? '#E9A6A6' : null},
              ]}>
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
