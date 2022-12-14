import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ListScreen from '../screens/ListScreen';
import ListMovies from '../screens/ListMovies';

const TelaStack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <TelaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TelaStack.Screen name="Profile" component={ProfileScreen} />
      <TelaStack.Screen name="List" component={ListScreen} />
      <TelaStack.Screen name="ListMovies" component={ListMovies} />
    </TelaStack.Navigator>
  );
}
