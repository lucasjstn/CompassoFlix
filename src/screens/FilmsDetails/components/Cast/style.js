import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

function relativeHeight(pixel) {
    return height * (pixel/812)
}
function relativeWidth(pixel) {
    return width * (pixel/375)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginTop: relativeHeight(25),
        marginLeft:relativeWidth(20)
    },
    castTitleWrapper: {
        alignItems:'center'
    },
    castTitle: {
        backgroundColor: '#9C4A8B',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 12,
        color: 'white',
    },
    lineBottom: {
        borderBottomWidth: StyleSheet.hairlineWidth + 1,
        borderBottomColor: '#9C4A8B',
        width: relativeWidth(30),
        marginTop:-12,
        marginBottom:8,
    },
    actorWrapper: {
        flexDirection: 'row',
        paddingVertical: relativeHeight(9),
        alignItems: 'center',
        marginHorizontal: relativeWidth(20)
    },
    imgWrapper:{
        height: 40,
        width: 40,
        borderRadius: 20
    },
    actorContent: {
        paddingLeft: 10
    },
    actorName: {
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '700',
        marginBottom: -3,
        color: 'white'
    },
    actorRole: {
        fontSize: 9,
        lineHeight: 11,
        color: 'white'
        
    }
})

export default styles;