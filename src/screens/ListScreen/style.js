import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  goBack: {
    position: 'absolute',
    alignSelf: 'flex-start',
    left: 20,
    top: 17,
    elevation: 10,
  },
  title: {
    marginTop: 35 + 17,
    color: 'white',
    fontSize: 20,
    lineHeight: 27,
    marginBottom: 50,
    alignSelf: 'center',
  },
  card: {
    height: 79,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 16,
    flexDirection: 'row',
  },
  btnList: {
    height: '100%',
    width: '90%',
    backgroundColor: '#8F9AFC',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 13,
    paddingLeft: 37,
    justifyContent: 'space-between',
  },
  listTitle: {
    fontSize: 10,
    lineHeight: 14,
    width: '65%',
    textTransform: 'uppercase',
  },
  totalFilms: {
    fontSize: 8,
    lineHeight: 11,
  },
  btnDelete: {
    backgroundColor: '#E9A6A6',
    height: '100%',
    width: '10%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
