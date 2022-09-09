import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function relativeHeight(pixel) {
  return height * (pixel / 812);
}
function relativeWidth(pixel) {
  return width * (pixel / 375);
}

export const AddFilmInListWrapper = styled.View`
    margin-top: 50px;
    flex-direction: row;
    background-color: #C4C4C4;
    justify-content: space-around;
    position: absolute;
    border-radius: 10px;
    padding-left: 18px;
    margin-left: 8px
`

export const TxtFilminList = styled.Text`
    color: black;
    right: 15px;
    font-size: 10px;
    top: 3px
`


const styles = StyleSheet.create({
  alreadyRatedButton: {
    width: relativeWidth(116),
    height: relativeHeight(22),
    backgroundColor: 'cyan',
    position: 'absolute',
    marginTop: relativeHeight(244),
    marginLeft: relativeWidth(20),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    height: relativeWidth(150),
    opacity: 0.7,
  },
  frontCoverBtn: {
    width: relativeWidth(116),
    height: relativeHeight(166),
    marginTop: relativeHeight(78),
    marginLeft: relativeWidth(20),
    position: 'absolute',
  },
  frontCover: {
    width: relativeWidth(116),
    height: relativeHeight(166),
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingButton: {
    width: relativeWidth(116),
    height: relativeHeight(22),
    backgroundColor: '#E9A6A6',
    position: 'absolute',
    marginTop: relativeHeight(244),
    marginLeft: relativeWidth(20),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    textTransform: 'uppercase',
    fontSize: relativeHeight(10),
    color: 'black',
  },
  mainWrapper: {
    marginLeft: relativeWidth(20) + relativeWidth(116), //soma do marginLeft + width do frontCover
    marginTop: relativeHeight(10),
    marginBottom: relativeHeight(30),
  },
  popUpWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: relativeHeight(30),
  },
  popUpTitle: {
    backgroundColor: '#AE2012',
    padding: 7,
    fontSize: 10,
    color: 'white',
    borderRadius: 6,
    marginTop: 1,
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
    paddingHorizontal: relativeWidth(15),
  },
  frontCoverTitle: {
    fontSize: 18,
    lineHeight: 25,
    color: 'white',
    textAlign: 'auto',
  },
  frontCoverLaunch: {
    fontSize: 10,
    color: 'white',
  },
  frontCoverMin: {
    fontSize: 7,
    lineHeight: 10,
    color: 'white',
  },
  directorText: {
    paddingLeft: relativeWidth(16),
    marginBottom: relativeHeight(20),
    fontSize: 8,
    lineHeight: 11,
    color: 'white',
  },
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: relativeWidth(66),
    paddingHorizontal: relativeWidth(15),
    bottom: 15
  },
  rating: {
    fontSize: 30,
    lineHeight: 41,
    color: '#E9A6A6',
  },
  votesWrapper: {
    alignItems: 'center',
  },
  votesText: {
    fontSize: 10,
    lineHeight: 14,
    color: 'white',
  },
  iconFilmInList:{
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    right: 20
  },
});

export default styles;
