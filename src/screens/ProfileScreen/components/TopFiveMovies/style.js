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
  seeAllButton: {
    padding:4,
    alignItems: 'center',
    marginBottom: relativeHeight(15),
  },
  seeAll: {
    color: '#E9A6A6',
    fontSize: 10,
    lineHeight: 12,
  },
  listMovies: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    height: relativeHeight(92),
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
    marginLeft: relativeWidth(2),
  },
});

export default styles;
