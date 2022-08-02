import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignIn = () => {
    return(
        <View style={styles.container}>
            <View style={styles.trapezoid}>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    trapezoid: {
        width: 200,
        height: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 100,
        borderLeftWidth: 50,
        borderRightWidth: 80,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    container: {
        flex: 1,
        backgroundColor: '#bfbfbf',
    },
})

export default SignIn;