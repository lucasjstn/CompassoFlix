import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    color: 'white',
  },
  picture:{
    top: 1,
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 30,
    top: 10
}
});

export default styles;
