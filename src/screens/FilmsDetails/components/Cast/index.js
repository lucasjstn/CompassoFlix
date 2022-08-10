import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { apiImage } from "../../../../service/api";
import styles from "./style";

const undefinedPhoto = 'https://w7.pngwing.com/pngs/434/614/png-transparent-question-mark-graphy-big-question-mark-text-trademark-logo.png'

const Item = ({ name, character, profile_path }) => (
    <View
    style={styles.actorWrapper}>
        <Image
            source={{ uri: profile_path ? `${apiImage.defaults.baseURL}w138_and_h175_face${profile_path}` : undefinedPhoto }}
            style={styles.imgWrapper}
        />
        <View style={styles.actorContent}>
            <Text style={styles.actorName}>{name}</Text>
            <Text style={styles.actorRole}>{character}</Text>
        </View>
    </View>
);

export default function Cast({ cast, castTitle }) {

    const renderItem = ({ item }) => {
        return <Item name={item.name} character={item.character} profile_path={item.profile_path} id={item.id} />
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.castTitleWrapper}>
                    <Text style={styles.castTitle}>{ castTitle }</Text>
                    <Text style={styles.lineBottom}></Text>
                </View>
            </View>
            <FlatList
                style={{flex: 1}}
                data={cast}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
}