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
  favoriteMoviesWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    top: relativeHeight(157),
    marginHorizontal: relativeWidth(14 / 2),
    flexWrap: 'wrap',
    alignSelf: 'center',
    zIndex: -1,
  },
  favoriteImageWrapper: {
    width: relativeWidth(75),
    height: relativeHeight(110),
    borderRadius: 10,
    marginVertical: relativeHeight(12 / 2),
    marginHorizontal: relativeWidth(7),
    zIndex: -1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  nameList: {
    width: 211,
    height: 54,
    left: 82,
    top: 100,
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: '700',
    color: '#E9A6A6',
    marginBottom: 26,
  },
  descriptionList: {
    width: 344,
    height: 36,
    top: 120,
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'justify',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  return: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 33,
    height: 33,
    left: 20,
    top: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconReturn: {
    color: '#000000',
  },
  toggleContainer: {
    position: 'absolute',
    width: 76,
    height: 25,
    right: 20,
    top: 25,
  },
  trackBarStyle: {
    backgroundColor: '#FFF',
    borderColor: '#E9A6A6',
    borderWidth: 1,
  },
  trackBar: {
    width: 76,
    height: 25,
  },
  thumbButton: {
    activeBackgroundColor: '#E9A6A6',
    inActiveBackgroundColor: '#E9A6A6',
    width: 37,
    height: 25,
  },
  image: {
    height: 95,
    width: 76,
    top: 180,
    marginBottom: 20,
    left: 140,
    borderRadius: 10,
  },
  teste: {
    position: 'absolute',
    top: 295,
    left: 30,
  },
  image2: {
    height: 95,
    width: 76,
    marginBottom: 20,
    borderRadius: 10,
  },
  teste1: {
    left: 210,
  },
  deleteButtton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
    backgroundColor: 'white',
  },
});

export default styles;
