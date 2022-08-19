import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 379
  },
  lineUp:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 319
  },
  lineDown:{
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 379
  },
  lineMid:{
    borderBottomWidth: 1,
    width: 61,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    top: 348,
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
    top: 335,
    left: 84
  },
  serieIconLocation:{
    top: 335,
    left: 267
  }
});

export default styles;
