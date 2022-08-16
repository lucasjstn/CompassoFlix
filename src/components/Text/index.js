import React from 'react';
import {Text} from 'react-native';

export function TextRegular({
  style,
  children,
  onPressOut,
  onLongPress,
  numberOfLines,
}) {
  return (
    <Text
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      numberOfLines={numberOfLines}
      style={[style, {fontFamily: 'OpenSans-Regular'}]}>
      {children}
    </Text>
  );
}

export function TextSemiBold({
  style,
  children,
  onPressOut,
  onLongPress,
  numberOfLines,
}) {
  return (
    <Text
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      numberOfLines={numberOfLines}
      style={[style, {fontFamily: 'OpenSans-SemiBold'}]}>
      {children}
    </Text>
  );
}

export function TextBold({
  style,
  children,
  onPressOut,
  onLongPress,
  numberOfLines,
}) {
  return (
    <Text
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      numberOfLines={numberOfLines}
      style={[style, {fontFamily: 'OpenSans-Bold'}]}>
      {children}
    </Text>
  );
}
