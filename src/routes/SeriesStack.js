import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeriesScreen from "../screens/SeriesScreen";
import SeriesDetails from "../screens/SeriesDetails";

const TelaStack = createNativeStackNavigator();

export default function SeriesStack() {
    return (
        <TelaStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <TelaStack.Screen 
                name="FlatFilmes" 
                component={SeriesScreen}
            />
            <TelaStack.Screen 
                name="Details" 
                component={SeriesDetails}
            />
        </TelaStack.Navigator>
    )
}