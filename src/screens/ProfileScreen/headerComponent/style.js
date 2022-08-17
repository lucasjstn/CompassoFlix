import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nome:{
        color: 'white',
        fontSize: 18,
        top: 176,
        position: 'absolute'
    },
    conteinerImg:{
        top: 98,
        position: 'absolute'
    },
    ratedConteiner:{
        position: 'absolute',
        top: 247,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rate:{
        color: '#9C4A8B', 
        fontSize: 24
    },
    textRated:{
        position: 'absolute',
        top: 35,
        color: 'white'
    }
})

export default styles