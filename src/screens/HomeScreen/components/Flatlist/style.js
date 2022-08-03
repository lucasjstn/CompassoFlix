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
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 1
    }
})

export default styles;