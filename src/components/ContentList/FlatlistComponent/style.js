import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    conteinerImage: {
        marginHorizontal: 8,
        marginTop: 16,
        left: -5
    },
    Img: {
        width: width*0.20,
        height: height*0.12,
        left: 7,
        borderRadius: 10
    },
    icon: {
        top: 4.5,
        left: 6,
    },
    note: {
        fontSize: 9, 
        top: -7, 
        left: 20,
        color:'white'
    }
})

export default styles;