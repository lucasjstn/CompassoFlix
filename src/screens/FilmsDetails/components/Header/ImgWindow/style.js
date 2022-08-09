import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, .6)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        height: '50%',
        width: '70%'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: 'black',
        borderRadius: 55
    },
    imgWrapper: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        elevation: 5
    }
});

export default styles;