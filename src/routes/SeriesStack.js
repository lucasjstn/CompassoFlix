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
                name="HomeSeries" 
                component={SeriesScreen}
            />
            <TelaStack.Screen 
                name="SeriesDetails" 
                component={SeriesDetails}
            />
        </TelaStack.Navigator>
    )
}