import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    alignSelf: 'center',
    width: '85%',
    marginTop: 31,
  },
  leaveWrapper: {
    alignSelf: 'flex-end',
  },
  btnLeave: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9A6A6',
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 3,
  },
  leaveText: {
    fontSize: 10,
    paddingLeft: 6,
    color: 'black',
  },
  imgWrapper: {
    alignSelf: 'center',
    marginTop: 13,
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    marginBottom: 50,
  },
  ratedWrapper: {
    alignSelf: 'center',
  },
  numberRated: {
    color: '#9C4A8B',
    fontSize: 24,
    lineHeight: 33,
  },
  ratedText: {
    fontSize: 11,
    lineHeight: 15,
    color: 'white',
    marginBottom:22
  },
});
export default styles;
