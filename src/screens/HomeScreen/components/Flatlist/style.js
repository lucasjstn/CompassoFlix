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
    },
    picture:{
        top: 1,
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 30,
        top: 10
    }
})

export default styles;