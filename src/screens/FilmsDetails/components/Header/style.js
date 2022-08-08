import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

function relativeHeight(pixel) {
    return height * (pixel / 812);
}
function relativeWidth(pixel) {
    return width * (pixel / 375);
}

const styles = StyleSheet.create({
    poster: {
        height: relativeWidth(160),
        opacity: .7
    },
    frontCover: {
        width: relativeWidth(116),
        height: relativeHeight(182),
        position: 'absolute',
        marginTop: relativeHeight(100),
        marginLeft: relativeWidth(20),
        borderRadius: 10
    },
    mainWrapper: {
        marginLeft: relativeWidth(20) + relativeWidth(116), //soma do marginLeft + width do frontCover
        marginTop: relativeHeight(10)
    },
    popUpWrapper: {
        position: 'absolute',
        alignItems:'center',
        justifyContent: 'space-evenly',
        paddingBottom: relativeHeight(30),
    },
    popUpTitle: {
        backgroundColor: '#AE2012',
        padding: 7,
        fontSize:10,   
        color: 'white',
        fontWeight: '700',
        borderRadius:6,
        marginTop:1
    },
    bottomPopUp: {
        width: 0,
        backgroundColor: 'transparent',
        borderTopWidth: 7,
        borderRightWidth: 5.62,
        borderLeftWidth: 5.62,
        borderTopColor: '#AE2012',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    mainTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: relativeWidth(15)

    },
    frontCoverTitle: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '700',
        color: 'white',
        textAlign: 'auto',
    },
    frontCoverLaunch: {
        fontSize: 10,
        fontWeight: '400',
        color: 'white',
        
    },
    frontCoverMin: {
        fontSize: 7,
        lineHeight: 10,
        fontWeight: '400',
        color: 'white',
    },
    directorText: {
        paddingLeft: relativeWidth(16),
        fontSize: 8,
        lineHeight: 11,
        fontWeight: '400',
        color: 'white'
    },
    ratingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: relativeWidth(66),
        marginTop: relativeHeight(25),
        paddingHorizontal: relativeWidth(15)
    },
    rating: {
        fontSize: 30,
        lineHeight: 41,
        fontWeight: '400',
        color: '#E9A6A6'
    },
    votesWrapper: {
        alignItems: 'center'
    },
    votesText: {
        fontSize: 10,
        lineHeight: 14,
        color: 'white'
    }
})

export default styles;