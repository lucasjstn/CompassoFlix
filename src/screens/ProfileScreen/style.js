import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 335
  },
  lineUp:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 270
  },
  lineDown:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 330
  },
  lineMid:{
    borderBottomWidth: 1,
    width: 61,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 298.9,
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
    top: 285,
    left: 90
  },
  serieIconLocation:{
    top: 285,
    left: 267
  }
});

export default styles;
