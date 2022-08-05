import {StyleSheet} from 'react-native';
import {height} from './consts';

const styles = StyleSheet.create({
  botaotexto: {
    color: '#1F1D36',
    fontWeight: 'bold',
  },
  botaologin: {
    backgroundColor: '#E9A6A6',
    width: 95,
    alignSelf: 'center',
    height: 35,
    borderRadius: 30,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailinput: {
    padding: -10,
    paddingLeft: 50,
    fontSize: 13,
    height: 33,
    borderRadius: 20,
    margin: 7,
    alignSelf: 'center',
    color: 'white',
    // fontWeight: 'bold',
    backgroundColor: '#c4c4c4',
    opacity: 0.4,
    width: 243,
  },
  textentrar: {
    color: 'white',
    alignSelf: 'center',
    top: -30,
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: height * 0.25,
  },
  textlogin: {
    alignSelf: 'center',
    color: 'white',
    top: -30,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 24,
  },
  container: {
    backgroundColor: 'black',
    // flex: 1,
    height: '100%',
  },
});

export default styles;
