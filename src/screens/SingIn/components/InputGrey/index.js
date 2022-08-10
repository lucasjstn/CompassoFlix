import React from 'react';
import {TextInput, View} from 'react-native';
import inputs from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const InputGrey = ({
  username,
  setUsername,
  isPassword,
  value,
  onChangeText,
}) => {
  return (
    <>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholderTextColor="#a2a2a2"
          placeholder={isPassword ? 'senha' : 'usuário'}
          style={inputs.entriesInput}
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
          color={'#ffffff80'}
        />
      </View>
    </>
  );
};

export default InputGrey;
