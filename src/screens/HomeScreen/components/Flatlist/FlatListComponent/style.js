import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    conteinerImage: {
        paddingBottom: 25,
        paddingHorizontal: 8,
        top: 90,
        left: -5
    },
    Img: {
        width: width*0.20,
        height: height*0.12,
        left: 7,
    },
    icon: {
        top: 7,
        left: 6,
    },
    note: {
        fontSize: 9, 
        top: -7, 
        left: 20
    }
})

export default styles;