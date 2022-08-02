import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    conteinerImage:{
        paddingBottom: 6.5,
        paddingHorizontal: 8,
    },Img:{
        width: width*0.20,
        height: height*0.12
    }
})

export default styles