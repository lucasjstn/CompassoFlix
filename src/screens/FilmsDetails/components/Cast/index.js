import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Cast() {
    return (
        <View style={styles.container}>
            <Text style={styles.castTitle}>Elenco</Text>
            <View style={styles.actorWrapper}>
                <View style={styles.imgWrapper}></View>
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Robert Pattinson</Text>
                    <Text style={styles.actorRole}>Bruce Wayne / The Batman</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <View style={styles.imgWrapper}></View>
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Zoë Kravitz</Text>
                    <Text style={styles.actorRole}>Selina Kyle / Catwoman</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <View style={styles.imgWrapper}></View>
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Paul Dano</Text>
                    <Text style={styles.actorRole}>Edward Nashton / The Riddler</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <View style={styles.imgWrapper}></View>
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Jeffrey Wright</Text>
                    <Text style={styles.actorRole}>Lt. James Gordon</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <View style={styles.imgWrapper}></View>
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Colin Farrell</Text>
                    <Text style={styles.actorRole}>Oswald 'Oz' Cobblepot / The Penguin</Text>
                </View>
            </View>
        </View>
    );
}