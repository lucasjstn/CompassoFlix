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
        top: 116,
        right: 55
    },
    conteinerImg:{
        top: 58,
        left: 62,
    },
    ratedConteiner:{
        top: 207,
        right: 147,
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
    },
    leavebuttom:{
        width: 50.4,
        height: 14,
        left: 271,
        top: 11,
        backgroundColor: '#E9A6A6',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leavetxt:{
        color: 'black',
        fontSize: 10,
        left: 3
    },
    iconleave:{
        color: 'black',
        right: 2
    },
    leaveModal:{
        width: 327,
        height: 166,
        top: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        left: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    atencaoModal:{
        color: 'black',
        position: 'absolute',
        fontSize: 14,
        left: 32,
        top: 30
    },
    djsModal:{
        color: '#8E8E8E',
        position: 'absolute',
        top: 68,
        left: 32
    },
    cancelarModal:{
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        left: 63,
        top: 123,
        borderRadius: 5,
        backgroundColor: 'black'
    },
    cancelartxt:{
        fontSize: 10,
        color: 'white',
        marginBottom: 5,
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15
    },
    sairModal:{
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        left: 169,
        top: 123,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1
    },
    sairtxt:{
        fontSize: 10,
        color: 'black',
        marginBottom: 3,
        marginTop: 5,
        marginRight: 32,
        marginLeft: 32
    }
})

export default styles