import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'grey',
        top: 40

      },
      conteiner:{
        width: '100%',
        backgroundColor: 'white',
        height: '70%',
        borderRadius: 20,
        position: 'absolute',
        bottom: -10
      },
      closeButton:{
        alignSelf: 'flex-end',
        right: 20,
        position: 'absolute',
        top: 10
      },
      flatlistConteiner:{
        marginTop: 25,
        height: 135
      },
      listConteiner:{
        justifyContent: 'flex-start', 
        width: '100%',
        left: 50, 
        top: 10
      },
      selectListButton:{
        width: 20, 
        height: 20, 
        borderRadius: 50, 
        position: 'absolute', 
        borderWidth: 1, 
        left: -30, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      saveButton:{
        alignSelf: 'center', 
        backgroundColor: 'black', 
        paddingLeft: 15, 
        paddingRight: 15, 
        paddingTop: 2, 
        paddingBottom: 2, 
        borderRadius: 5, 
        position: 'absolute', 
        bottom: 50,
      }
});

export default styles;