import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, .7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        height: '28%',
        width: '100%',
        justifyContent: 'center'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: 'black',
        borderRadius: 55
    }
});

export default styles;