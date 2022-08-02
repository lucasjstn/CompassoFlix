import React, { useState } from "react";
import { SafeAreaView, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image, Polygon, Rect, SvgUri, Use } from "react-native-svg";
import { Dimensions } from "react-native";
import { alturaPrimeiroContainer, height, width } from "./consts";
const SignIn = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [see, setSee] = useState('')
  const onPress = (evt) => {
    console.log((evt.nativeEvent.locationX).toFixed(2), (evt.nativeEvent.locationY).toFixed(2));
    setX(((evt.nativeEvent.locationX)/width).toFixed(2)); setY(((evt.nativeEvent.locationY)/height).toFixed(2));
  };
 


    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerbanner}>

        <Svg width={width} height={'100%'} style={{borderColor: 'black', borderWidth: 1,}}>
          {/* <ClipPath id='clip'>
          <Rect clipPath="#clip" x={0} y={0} width={'100%'} height={'100%'} fill='black'/>
          </ClipPath> */}
          <ClipPath id='carafumando'>
            
          </ClipPath>
          <Polygon points={`0,0 ${width * 0.17},0 ${width * 0.5},${height/5} 0,${height/5}`} fill='#fcba03'/>
          <Polygon points={`${width * 0.17},0 ${width * 0.85}, 0 ${width * 0.485},${height * 0.19}`} fill='#f803fc'/>
          <Polygon points={`${width * 0.85},0 ${width},0 ${width},${height * 0.10} ${width * 0.655}, ${height * 0.10}`} fill='#0508e6'/>
          {/* <Image 
            clipRule="nonzero"
            x={'-10%'}
            y ={0}
            width ={'140%'}
            height ={'100%'}
            preserveAspectRatio = 'xMaxYMax slice'
            opacity = '0.8'
            href={require('../../assets/14.png')}
            clipPath='url(#clip)'
          /> */}
        </Svg>
        {/* <Svg width={width} height={height * 0.20} style={{borderColor: 'black', borderWidth: 1,}}>
          <Circle r ={20} cx ={'50%'} cy ={'50%'} fill='black' />
          
        </Svg> */}

        
        <Text style={{fontSize: 40,}}>{(width).toFixed(2)}</Text>
        <Text style={{fontSize: 40,}}>{(height.toFixed(2))}</Text>
        <Text style={{fontSize: 40,}}>x= {x} , y = {y}</Text>
      </View>


    
    </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    containerbanner: {
        // width: width,
        height: height * 0.5,
        backgroundColor: 'pink',
        position: 'absolute',
        fontWeight: '900',
        // backgroundColor: 'blue',
    }, 
    container: {
        flex: 1,
        backgroundColor: '#bfbfbf',
    },
})

export default SignIn;