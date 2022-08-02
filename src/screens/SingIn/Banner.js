import React, { useState } from "react";
import { SafeAreaView, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image, Polygon, Rect, SvgUri, Use } from "react-native-svg";
import { Dimensions } from "react-native";
import { alturaPrimeiroContainer, height, width } from "./consts";

const Banner = () => {
    return (
        <View style={styles.containerbanner}>

        <Svg width={width} height={height/2} style={{}}>
            <ClipPath id='carafumando'>
              <Polygon points={`
              0,0 
              ${width * 0.11},0 
              ${width * 0.5},${height * 0.2} 
              0,${height * 20}
              `}/>
            </ClipPath>
            <Image 
              clipRule="nonzero"
              x={width * -0.021}
              y ={height * -0.0559}
              width ={width * 0.66}
              height ={height * 0.255}
              preserveAspectRatio = 'xMinYMin slice'

              
              opacity = '0.8'
              href={require('../../assets/18.png')}
              clipPath='url(#carafumando)'
            />
          </Svg>
          
          <Svg style={{position: 'absolute'}}>
          <ClipPath id="minadevermelho">
            <Polygon points={`
            ${width * 0.11},0 
            ${width * 0.88}, 0 
            ${width * 0.478},${height * 0.19}
            `} fill='#f803fc'/>
          </ClipPath>

          <Image 
              clipRule="nonzero"
              x={-14}
              y ={-45}
              width ={width}
              height ={height * 0.24}
              preserveAspectRatio = 'xMinYMin slice'
              
              opacity = '0.8'
              href={require('../../assets/14.png')}
              clipPath='url(#minadevermelho)'
            />
          </Svg>

          <Svg style={{position: 'absolute'}}>
          <ClipPath id='doutorestranho'>
          <Polygon points={`
            ${width * 0.88},0 
            ${width},0 
            ${width},${height * 0.14} 
            ${width * 0.58}, ${height * 0.14}
          `} fill='#0508e6'/> 
          
          </ClipPath>
          <Image 
              clipRule="nonzero"
              x={width * 0.001}
              y ={height * -0.04}
              width ={width}
              height ={height * 0.27}
              preserveAspectRatio = 'xMaxYMax meet'
              
              opacity = '0.8'
              href={require('../../assets/166.png')}
              clipPath='url(#doutorestranho)'
            />

          </Svg>
          <Svg style={{position: 'absolute'}}>
            <ClipPath id='bradpitt'>

          <Polygon points={`
            ${width * 0.58},${height * 0.14} 
            ${width},${height * 0.135} 
            ${width},${height * 0.28} 
            ${width * 0.705}, ${height * 0.32}
            ${width * 0.4768}, ${height * 0.1888}
            `} fill='#607020'/>
            </ClipPath>
            <Image 
              clipRule="nonzero"
              x={width * 0.41}
              y ={height * -0.0115}
              width ={width * 0.6}
              height ={height * 0.39}
              preserveAspectRatio = 'xMaxYMax meet'
              
              opacity = '0.8'
              href={require('../../assets/15.jpg')}
              clipPath='url(#bradpitt)'
            />
       
       
        </Svg>
        <Svg position='absolute'>
          <ClipPath id='mecbeth'>
          <Polygon points={`
            0,${height * 0.199}
            ${width * 0.496}, ${height * 0.1996}
            ${width * 0.70934}, ${height * 0.32}
            0, ${height * 0.41}
          `} fill='black'/>
          </ClipPath>
          <Image 
              clipRule="nonzero"
              x={0}
              y ={70}
              width ={width * 0.754}
              height ={height * 0.45}
              preserveAspectRatio = 'xMidYMid meet'
              
              opacity = '0.8'
              href={require('../../assets/17.png')}
              clipPath='url(#mecbeth)'
            />
        </Svg>
        {/* <Svg width={width} height={height * 0.20} style={{borderColor: 'black', borderWidth: 1,}}>
          <Circle r ={20} cx ={'50%'} cy ={'50%'} fill='black' />
          
        </Svg> */}

{/*         
        <Text style={{fontSize: 40,}}>{(width).toFixed(2)}</Text>
        <Text style={{fontSize: 40,}}>{(height.toFixed(2))}</Text>
        <Text style={{fontSize: 40,}}>x= {x} , y = {y}</Text> */}
      </View>
    )
}

const styles = StyleSheet.create({
    containerbanner: {
        // width: width,
        // height: height * 0.5,
        backgroundColor: 'black',
        // position: 'absolute',
        // fontWeight: '900',
        backgroundColor: 'black',
        opacity: 0.6
    }
});

export default Banner;

