import { StyleSheet } from "react-native";

const styles = StyleSheet.create({  
    poster: {
        height: 160,
        backgroundColor: 'red'
    },
    frontCover: {
        width: 116,
        height: 182,
        backgroundColor: 'blue',
        position: 'absolute',
        marginTop: 100,
        marginLeft: 20
    },
    mainWrapper: {
        marginLeft: 136,//soma do marginLeft + width do frontCover
        marginTop: 10
    },
    mainTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
    },
    frontCoverTitle: {
        fontSize: 20,
        lineHeight:27,
        fontWeight: '700'
    },
    frontCoverLaunch: {
        fontSize: 10,
        fontWeight: '400'
    },
    frontCoverMin: {
        fontSize: 7,
        lineHeight:10,
        fontWeight: '400'
    },
    directorText: {
        paddingLeft: 25,
        fontSize:8,
        lineHeight:11,
        fontWeight: '400'
    },
    ratingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginRight: 66,
        marginTop: 25
    },
    rating: {
        fontSize: 30,
        lineHeight: 41,
        fontWeight: '400'
    },
    votesWrapper: {
        alignItems: 'center'
    },
    votesText: {
        fontSize: 10,
        lineHeight: 14
    }
})

export default styles;