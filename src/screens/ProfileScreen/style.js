import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 295
  },
  lineUp:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 230
  },
  lineDown:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 290
  },
  lineMid:{
    borderBottomWidth: 1,
    width: 61,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 258.9,
    transform: [{rotate: '90deg'}],
    left: 165
  },
  iconFilmes:{
    position:'absolute',
  },
  iconSeries:{
    position:'absolute'
  },
  filmesIconLocation:{
    top: 245,
    left: 90
  },
  serieIconLocation:{
    top: 245,
    left: 267
  }
});

export default styles;
