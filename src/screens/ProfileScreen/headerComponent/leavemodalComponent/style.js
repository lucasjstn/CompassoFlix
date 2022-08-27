import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    height: 166,
    marginTop: '74%',
    borderRadius: 25,
    padding: 30,
  },
  atention: {color: 'black', marginBottom: 17, fontSize: 14, lineHeigth: 21},
  warning: {color: '#8E8E8E', marginBottom: 35, fontSize: 13, lineHeigth: 20},
  btnWrapper: {flexDirection: 'row', justifyContent: 'space-evenly'},
  btnCancel: {
    width: 84,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  btnText: {color: 'white', fontSize: 10, lineHeigth: 15}
});

export default styles;
