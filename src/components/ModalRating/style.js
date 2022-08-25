import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cancelOkButtonsText: {
    fontSize: 13,
    color: 'black',
  },
  cancelOkButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 83,
    height: 23,
    marginHorizontal: 10,
  },
  buttonsWrapper: {
    margin: 12,
    // backgroundColor: '#6FC0E3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  staticInput: {fontSize: 23, color: 'black'},
  textInput: {
    padding: 0,
    fontSize: 19,
  },
  ratingInputContainer: {
    width: 74,
    height: 25,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    borderRadius: 10,
    top: 3,
    padding: 0,
    alignItems: 'center',
  },
  ratingResourcer: {
    // height: 40,
    // backgroundColor: '#C86EFA',
    flexDirection: 'row',
    position: 'relative',
    margin: 12,
  },
  sendYourRating: {
    color: 'black',
    margin: 12,
    // top: 24,
    lineHeight: 27,
    fontSize: 18,
    // backgroundColor: '#F08B69',
  },
  contentWrapper: {
    backgroundColor: 'white',
    width: 327,
    height: 166,
    borderRadius: 10,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    top: '40%',
    // backgroundColor: '#493843',
    // flex: 1,
  },
});

export default styles;
