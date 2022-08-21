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
    // backgroundColor: 'red',
    width: '100%',
    minHeight: height,
  },
  favoriteImageWrapper: {
    width: relativeWidth(75),
    height: relativeHeight(110),
    borderRadius: 10,
    marginVertical: relativeHeight(12 / 2),
    marginHorizontal: relativeWidth(7),
    // alignSelf
  },
  favoriteMoviesWrapper: {
    position: 'absolute',
    alignItems: 'center',
    // backgroundColor: 'grey',
    flexDirection: 'row',
    top: relativeHeight(157),
    marginHorizontal: relativeWidth(14 / 2),
    // display: 'flex',
    // maxWidth: '9%',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  greetingTextUserName: {
    color: '#E9A6A6',
    fontSize: relativeHeight(20),
    lineHeight: relativeHeight(27),
  },
  greetingText: {
    color: 'white',
    fontSize: relativeHeight(20),
    lineHeight: relativeHeight(27),
    // backgroundColor: 'blue',

    // textAlign: 'center',
  },
  greetingContainerRated: {
    position: 'absolute',
    top: relativeHeight(80),
    textAlign: 'justify',
    alignSelf: 'center',
    flexDirection: 'row',
    width: relativeWidth(210),
  },
  greetingContainer: {
    position: 'absolute',
    top: relativeHeight(80),
    textAlign: 'justify',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  userFavoritesContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  seeAllButton: {
    width: relativeWidth(55),
    height: relativeHeight(20),
    alignItems: 'center',
  },
  container: {
    width: '93%',
    alignSelf: 'center',
    marginVertical: relativeHeight(16),
  },
  topTextsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    color: 'white',
    fontSize: 12,
    lineHeight: 14,
  },
  seeAll: {
    color: '#E9A6A6',
    fontSize: 10,
    lineHeight: 12,
    // left: 20
  },
  listMovies: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: relativeHeight(12),
  },
  load: {
    width: 100,
    height: 100,
  },
  moviesWrapper: {
    paddingHorizontal: relativeWidth(4),
  },
  imgWrapper: {
    width: relativeWidth(62),
    height: relativeHeight(93),
    borderRadius: 10,
  },
  ratedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: relativeHeight(6),
  },
  rated: {
    color: 'white',
    fontSize: 8,
    lineHeight: 11,
    marginLeft: relativeWidth(4),
  },
});

export default styles;
