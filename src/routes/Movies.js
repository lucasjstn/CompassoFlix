import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatFilmes from '../screens/HomeScreen/components/Flatlist/FlatlistF';
import FilmsDetails from '../screens/FilmsDetails/index';

const MoviesStack = createNativeStackNavigator();

export default function Movies() {
  return (
    <MoviesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MoviesStack.Screen name="FlatFilmes" component={FlatFilmes} />
      <MoviesStack.Screen name="Details" component={FilmsDetails} />
    </MoviesStack.Navigator>
  );
}
