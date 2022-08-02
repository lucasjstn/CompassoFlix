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
        marginLeft: relativeWidth(136),//soma do marginLeft + width do frontCover
        marginTop: relativeHeight(10)
    },
    mainTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        
        
    },
    frontCoverTitle: {
        fontSize: 20,
        lineHeight:27,
        fontWeight: '700',
        color: 'white'
        
    },
    frontCoverLaunch: {
        fontSize: 10,
        fontWeight: '400',
        color: 'white'
    },
    frontCoverMin: {
        fontSize: 7,
        lineHeight:10,
        fontWeight: '400',
        color: 'white'
    },
    directorText: {
        paddingLeft: relativeWidth(22),
        fontSize:8,
        lineHeight:11,
        fontWeight: '400',
        color: 'white'
    },
    ratingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginRight: relativeWidth(66),
        marginTop: relativeHeight(25)
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