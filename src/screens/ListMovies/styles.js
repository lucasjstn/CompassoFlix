import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function relativeHeight(pixel) {
  return height * (pixel / 812);
}
function relativeWidth(pixel) {
  return width * (pixel / 375);
}

const styles = StyleSheet.create({
  favoriteMoviesWrapper: {
    paddingLeft: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  favoriteImageWrapper: {
    width: width * 0.21,
    height: width * 0.32,
    borderRadius: 10,
    marginVertical: 5,
    margin: 5,
    backgroundColor: 'blue',
  },
  goback: {
    width: '70%',
    backgroundColor: 'purple',
    marginLeft: relativeWidth(20),
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  nameList: {
    width: 211,
    alignSelf: 'center',
    height: 54,
    marginTop: 80,
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    color: '#E9A6A6',
    marginBottom: 26,
  },
  descriptionList: {
    // minWidth: '50%',
    marginVertical: 13,
    fontSize: 13,
    lineHeight: 14,
    alignSelf: 'center',
    textAlign: 'justify',
    color: '#FFFFFF',
  },
  return: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 33,
    height: 33,
    left: 20,
    top: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconReturn: {
    color: '#000000',
  },
  toggleContainer: {
    position: 'absolute',
    marginLeft: '75%',
  },
  trackBarStyle: {
    backgroundColor: '#FFF',
    borderColor: '#E9A6A6',
    borderWidth: 1,
  },
  trackBar: {
    width: 76,
    height: 25,
  },
  thumbButton: {
    activeBackgroundColor: '#E9A6A6',
    inActiveBackgroundColor: '#E9A6A6',
    width: 37,
    height: 25,
  },
  image: {
    height: 95,
    width: 76,
    top: 180,
    marginBottom: 20,
    left: 140,
    borderRadius: 10,
  },
  teste: {
    position: 'absolute',
    top: 295,
    left: 30,
  },
  image2: {
    height: 95,
    width: 76,
    marginBottom: 20,
    borderRadius: 10,
  },
  teste1: {
    left: 210,
  },
  deleteButtton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
    backgroundColor: 'white',
  },
  containerModal: {
  backgroundColor: 'white',
  width: '85%',
  alignSelf: 'center',
  height: 200,
  marginTop: '74%',
  borderRadius: 25,
  paddingVertical: 17,
  alignItems: 'center',
},
txtModal: {
  color: 'black',
  marginTop: 40,
},
btnWrapper: {
  flexDirection:'row',
  width:'60%',
  justifyContent:'space-between',
  marginTop: 50
},
btnSave: {
  backgroundColor: 'black',
  paddingVertical:4,
  width:83,
  borderRadius: 5,
  justifyContent:'center', 
  alignItems:'center'
},
btnCancel: {
  backgroundColor:'white',
  borderWidth:2,
  borderColor:'black'
},
btnSaveText: {
  color: 'white',
  fontSize: 10,
  fontHeight: 15,
  textTransform: 'uppercase',
},
btnCancelText: {
  color: 'black',
}
});

export default styles;
