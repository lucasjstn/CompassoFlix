import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function relativeHeight(pixel) {
  return height * (pixel / 812);
}
function relativeWidth(pixel) {
  return width * (pixel / 375);
}
const styles = StyleSheet.create({
    touchableWrapper: {
        width: '100%',
        minHeight: height,
      },
      greetingContainer: {
        position: 'absolute',
        top: relativeHeight(80),
        textAlign: 'justify',
        alignSelf: 'center',
        flexDirection: 'row',
      },
      greetingContainerRated: {
        position: 'absolute',
        top: relativeHeight(80),
        textAlign: 'justify',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '80%',
      },
      greetingText: {
        color: 'white',
        fontSize: relativeHeight(20),
        lineHeight: relativeHeight(27),
      },
      greetingTextUserName: {
        textTransform: 'capitalize',
        color: '#E9A6A6',
        fontSize: relativeHeight(20),
        lineHeight: relativeHeight(27),
      },
      favoriteMoviesWrapper: {
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        top: relativeHeight(157),
        marginHorizontal: relativeWidth(14 / 2),
        flexWrap: 'wrap',
        alignSelf: 'center',
      },
      favoriteImageWrapper: {
        width: relativeWidth(75),
        height: relativeHeight(110),
        borderRadius: 10,
        marginVertical: relativeHeight(12 / 2),
        marginHorizontal: relativeWidth(7),
      },
})

export default styles;