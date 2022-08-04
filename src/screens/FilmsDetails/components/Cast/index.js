import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./style";

export default function Cast() {
    return (
        <View style={styles.container}>
            <View style={styles.castTitleWrapper}>
                <Text style={styles.castTitle}>Elenco</Text>
                <Text style={styles.lineBottom}></Text>
            </View>
            <View style={styles.actorWrapper}>
                <Image
                    source={{ uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg' }}
                    style={styles.imgWrapper}
                />
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Robert Pattinson</Text>
                    <Text style={styles.actorRole}>Bruce Wayne / The Batman</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <Image
                    source={{ uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/4uOfGQSKCz2I7HVV5vPwhvTD61y.jpg' }}
                    style={styles.imgWrapper}
                />
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Zoë Kravitz</Text>
                    <Text style={styles.actorRole}>Selina Kyle / Catwoman</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <Image
                    source={{ uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/zEJJsm0z07EPNl2Pi1h67xuCmcA.jpg' }}
                    style={styles.imgWrapper}
                />
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Paul Dano</Text>
                    <Text style={styles.actorRole}>Edward Nashton / The Riddler</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <Image
                    source={{ uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/43EGVkmHzZFZQQHW20AL6GivrBD.jpg' }}
                    style={styles.imgWrapper}
                />
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Jeffrey Wright</Text>
                    <Text style={styles.actorRole}>Lt. James Gordon</Text>
                </View>
            </View>

            <View style={styles.actorWrapper}>
                <Image
                    source={{ uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/vVqrAhZpojAtp874wBaaFt5T4dN.jpg' }}
                    style={styles.imgWrapper}
                />
                <View style={styles.actorContent}>
                    <Text style={styles.actorName}>Colin Farrell</Text>
                    <Text style={styles.actorRole}>Oswald 'Oz' Cobblepot / The Penguin</Text>
                </View>
            </View>
        </View>
    );
}