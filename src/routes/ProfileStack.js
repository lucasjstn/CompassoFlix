import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ListScreen from '../screens/ListScreen';
import FilmsDetails from '../screens/FilmsDetails';
import SeriesDetails from '../screens/SeriesDetails';
import ListMovies from '../screens/ListMovies';

const TelaStack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <TelaStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <TelaStack.Screen name="Profile" component={ProfileScreen} />
      <TelaStack.Screen name="List" component={ListScreen} />
      <TelaStack.Screen name="MovieDetails" component={FilmsDetails} />
      <TelaStack.Screen name="SeriesDetails" component={SeriesDetails} />
      <TelaStack.Screen name="ListMovies" component={ListMovies} />

    </TelaStack.Navigator>
  );
}
