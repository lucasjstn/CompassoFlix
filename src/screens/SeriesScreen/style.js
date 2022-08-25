import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    color: 'white',
  },
});

export default styles;
