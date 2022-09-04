import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    height: 200,
    marginTop: '74%',
    borderRadius: 25,
    paddingVertical: 17,
    alignItems: 'center',
  },
  newList: {
    color: 'black',
    marginBottom: 8,
  },
  titleInput: {
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    borderRadius: 5,
    width: '90%',
    marginBottom: 5,
    padding: 0,
    paddingVertical: 2,
    paddingHorizontal: 16,
    color: 'black',
  },
  descriptionInput: {
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    borderRadius: 5,
    width: '90%',
    marginBottom: 5,
    padding: 0,
    paddingTop: 5,
    paddingHorizontal: 16,
    height: 60,
    textAlignVertical: 'top',
    color: 'black',
    marginBottom:17
  },
  btnWrapper: {
    flexDirection:'row',
    width:'60%',
    justifyContent:'space-between'
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
