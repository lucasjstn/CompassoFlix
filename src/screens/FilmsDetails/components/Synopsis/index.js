import React from "react";
import { Text, View } from "react-native";
import styles from "./style";


export default Synopsis = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.synopsisTitle}>Descubra a verdade.</Text> 
            <Text style={styles.synopsisContent}>Em seu segundo ano de combate ao crime, Batman descobre a corrupção em Gotham City que se conecta à sua própria família enquanto enfrenta um serial killer conhecido como Charada.</Text>
        </View>
    );
}