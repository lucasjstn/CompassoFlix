import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '89%',
    alignSelf: 'center',
  },
  btnTemp: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 42,
    justifyContent: 'center',
    borderRadius: 5,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTemp: {
    color: '#FFFFFF',
    marginLeft: 13,
  },
  bottomBorder: {
    height: 4,
    marginTop: -4,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginBottom: 10,
  },
  cardEp: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 42,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  overview: {
    fontSize: 7,
    width: '93%',
    marginLeft: 13,
  },
});

export default styles;