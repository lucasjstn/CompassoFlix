import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeriesScreen from '../screens/SeriesScreen';

const TelaStack = createNativeStackNavigator();

export default function SeriesStack() {
  return (
    <TelaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'FlatFilmes'}>
      <TelaStack.Screen name="FlatFilmes" component={SeriesScreen} />
    </TelaStack.Navigator>
  );
}
