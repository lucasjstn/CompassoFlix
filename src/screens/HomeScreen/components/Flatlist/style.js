import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    conteinerBackGround:{
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    conteinerFlatList:{
        width: width/0.84,
        height: 570,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 150
    }
})

export default styles;