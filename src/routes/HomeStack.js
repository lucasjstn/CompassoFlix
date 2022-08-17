import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatFilmes from "../screens/HomeScreen/components/Flatlist/FlatlistF";
import FilmsDetails from "../screens/FilmsDetails/index"

const TelaStack = createNativeStackNavigator();

export default function Tela() {
    return (
        <TelaStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <TelaStack.Screen 
                name="FlatFilmes" 
                component={FlatFilmes}
            />
            <TelaStack.Screen 
                name="Details" 
                component={FilmsDetails}
            />
        </TelaStack.Navigator>
    )
}
