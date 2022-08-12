import React from "react";
import { Text } from 'react-native';

export function TextRegular({ style, numberOfLines, children }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'OpenSans-Regular' }]}
    >
        {children}
    </Text>
}

export function TextSemiBold({ style, numberOfLines, children }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'OpenSans-SemiBold' }]}
    >
        {children}
    </Text>
}

export function TextBold({ style, numberOfLines, children }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'OpenSans-Bold' }]}
    >
        {children}
    </Text>
}