import React from "react";
import { FlatList, View, ScrollView} from "react-native";
import data from "../../../../services/mocks/data";
import FilmesCP from "./FlatListComponent/FlatlistComponent";
import styles from './style'
import { FilmesHeader } from "../HeaderFilms/HeaderCP";

export default function FlatFilmes(){
    const numColumns = 4;
    const renderItem = ({ item }) => (
        <FilmesCP
        rating={item.rating}
        image={item.image}
        />
);

    return (
        <View style={styles.conteinerBackGround}>
            <View style={styles.conteinerFlatList}>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                ListHeaderComponent={FilmesHeader}
                />
            </View>
        </View>
    );
}