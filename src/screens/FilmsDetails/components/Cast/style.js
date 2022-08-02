import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginTop: 25,
    },
    castTitle: {
        backgroundColor: 'purple',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10
    },
    actorWrapper: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    imgWrapper:{
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 20
    },
    actorContent: {
        paddingLeft: 10
    },
    actorName: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        marginBottom: -5
    },
    actorRole: {
        fontSize: 8,
        lineHeight: 11,
        
    }
})

export default styles;