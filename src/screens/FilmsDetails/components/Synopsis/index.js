import React, { useReducer } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";


export default Synopsis = ({ overview, tagline, synopsisTitle, more, seeLess }) => {

    const [aboutName, tradeAboutName] = useReducer((aboutName) => !aboutName, false )

    return (
        <View style={styles.container}>
            <Text style={styles.synopsisTitle}>{ tagline || synopsisTitle }</Text>
            <Text
                numberOfLines={aboutName ? 10 : 4}
                style={styles.synopsisContent}
            >{overview}</Text>
            
            <TouchableOpacity
                style={{display: overview?.length > 227 ? 'flex' : 'none'}}
                onPress={tradeAboutName}
            >
                <Text style={styles.about}>{aboutName ? seeLess : more}</Text>
            </TouchableOpacity>
        </View>
    );
}