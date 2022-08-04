import React from "react";
import { Text, View } from "react-native";
import styles from "./style";


export default Synopsis = ({ overView, tagLine }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.synopsisTitle}>{ tagLine }</Text> 
            <Text style={styles.synopsisContent}>{ overView }</Text>
        </View>
    );
}