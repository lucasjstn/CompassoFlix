import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = ({fullScreen = true}) => {
  return fullScreen ? (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <ActivityIndicator size={'large'} color={'white'} animating={true} />
    </View>
  ) : (
    <ActivityIndicator size={'large'} color={'red'} animating={true}  />
  );
};
export default Loading;
