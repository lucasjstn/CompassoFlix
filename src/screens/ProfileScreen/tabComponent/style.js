import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
    left: 170
  }
});

export default styles;