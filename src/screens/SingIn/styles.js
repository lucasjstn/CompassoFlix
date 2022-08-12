import {StyleSheet} from 'react-native';
import {height, width} from './consts';

const styles = StyleSheet.create({
  loadingIndicator: {
    top: '15%',
  },
  botaotexto: {
    color: '#1F1D36',
  },
  botaologin: {
    backgroundColor: '#E9A6A6',
    width: 95,
    alignSelf: 'center',
    height: 35,
    borderRadius: 30,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entriesInput: {
    padding: -10,
    paddingLeft: 50,
    fontSize: 13,
    height: 33,
    borderRadius: 20,
    margin: 7,
    alignSelf: 'center',
    color: '#a2a2a2',
    // fontWeight: 'bold',
    backgroundColor: '#454545',
    // opacity: 0.4,
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
    left: width * 0.25,
  },
  textlogin: {
    alignSelf: 'center',
    left: -3,
    color: 'white',
    top: -30,
    fontSize: 24,
  },
  container: {
    backgroundColor: 'black',
    // flex: 1,
    height: '100%',
  },
});

export default styles;
