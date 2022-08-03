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
        height: height/1.3,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;