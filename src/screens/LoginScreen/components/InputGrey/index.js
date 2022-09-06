import React from 'react';
import {TextInput, View} from 'react-native';
import inputs from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const InputGrey = ({errorMessage, isPassword, value, onChangeText}) => {
  return (
    <>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholderTextColor={!errorMessage ? '#ffffff80' : '#EC2626'}
          placeholder={isPassword ? 'senha' : 'usuário'}
          style={
            !errorMessage
              ? inputs.entriesInput
              : [inputs.entriesInput, {color: '#EC2626'}]
          }
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          maxLength={20}
          secureTextEntry={isPassword ? true : false}
        />
        <EvilIcons
          style={{position: 'absolute', left: 100}}
          name={isPassword ? 'lock' : 'user'}
          size={20}
          color={!errorMessage ? '#ffffff80' : '#EC2626'}
        />
      </View>
    </>
  );
};

export default InputGrey;
