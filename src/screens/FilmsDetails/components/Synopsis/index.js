import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";


export default Synopsis = ({ overview, tagline, synopsisTitle, more, seeLess }) => {

    const [about, setAbout] = useState(4)
    const [aboutName, setAboutName] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.synopsisTitle}>{ tagline || synopsisTitle }</Text>
            <Text
                numberOfLines={about}
                style={styles.synopsisContent}
            >{overview}</Text>
            
            <TouchableOpacity
                style={{display: overview?.length > 227 ? 'flex' : 'none'}}
                onPress={() => {
                    setAboutName(!aboutName);
                    !aboutName ? setAbout(10) : setAbout(4)
                }}
            >
                <Text style={styles.about}>{aboutName ? seeLess : more}</Text>
            </TouchableOpacity>
        </View>
    );
}