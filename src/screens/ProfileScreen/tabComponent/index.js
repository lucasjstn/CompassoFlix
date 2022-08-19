import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./style";

export default function Chooses(){
    return(
        <View style={styles.container}>
            <View style={styles.lineUp}></View>
            <View style={styles.lineDown}></View>
            <View style={styles.lineMid}></View>
        </View>
    )
}