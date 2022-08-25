import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

function relativeHeight(pixel) {
  return height * (pixel / 812);
}
function relativeWidth(pixel) {
  return width * (pixel / 375);
}

const styles = StyleSheet.create({
  poster: {
    position: 'absolute',
    width: relativeWidth(120),
    height: relativeWidth(182),
  },
  season: {
    marginTop: relativeHeight(5),
    backgroundColor: 'grey',
    height: relativeHeight(42),
    justifyContent: 'center',
    paddingLeft: relativeWidth(13),
  },
  seasonsContainer: {
    width: relativeWidth(335),
    marginTop: relativeHeight(25),
  },
  descriptionText: {
    color: 'white',
    fontSize: relativeHeight(12),
  },
  descriptionContainer: {
    position: 'absolute',
    top: relativeHeight(295),
    // left: relativeWidth(10),
    margin: relativeHeight(20),
    width: relativeWidth(332),
  },
  ratingText: {
    textTransform: 'uppercase',
    fontSize: relativeHeight(10),
    color: 'black',
  },
  ratingButton: {
    top: '90%',
    width: relativeWidth(119),
    height: relativeHeight(22),
    backgroundColor: '#E9A6A6',
    // position: 'absolute',
    // marginTop: relativeHeight(258),
    // marginLeft: relativeWidth(20),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfRates: {
    color: 'white',
    textAlign: 'center',
  },
  ratesInfoContaier: {
    position: 'absolute',
    left: relativeWidth(290),
    top: relativeHeight(229),
  },
  rating: {
    position: 'absolute',
    color: '#E9A6A6',
    left: relativeWidth(152),
    fontSize: relativeHeight(30),
    top: relativeHeight(229),
  },
  date: {
    marginBottom: relativeHeight(2.5),
    color: 'white',
    alignSelf: 'flex-end',
    marginLeft: relativeWidth(3),
  },
  author: {
    // backgroundColor: 'pink',
    color: 'white',
    lineHeight: relativeHeight(11),
    fontSize: relativeHeight(8),
    textAlign: 'center',
    margin: relativeHeight(2),
  },
  createdBy: {
    margin: relativeHeight(2),
    // backgroundColor: 'pink',
    color: 'white',
    lineHeight: relativeHeight(11),
    fontSize: relativeHeight(8),
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: relativeHeight(20),
    // lineHeight: relativeHeight(27),
    alignSelf: 'flex-end',
  },
  titleAndDateContainer: {
    maxHeight: relativeHeight(57),
    width: relativeWidth(168),
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    left: relativeWidth(152),
  },
  coverContainer: {
    width: relativeWidth(119),
    height: relativeHeight(204),
    borderRadius: 10,
    position: 'absolute',
    left: relativeWidth(18.47),
    top: relativeHeight(89),
  },
  bannerContainer: {
    width: width,
    height: relativeHeight(160),
  },
});

export default styles;
