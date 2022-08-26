import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  btnWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 1000,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

export default styles;
