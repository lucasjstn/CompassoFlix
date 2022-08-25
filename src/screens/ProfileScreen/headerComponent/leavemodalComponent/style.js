import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    leaveModal:{
        width: 327,
        height: 166,
        top: 300,
        backgroundColor: 'pink',
        borderRadius: 25,
        position: 'absolute',
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