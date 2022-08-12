/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Image, Polygon, Rect} from 'react-native-svg';
import {height, width} from '../../consts';
import styles from '../../styles';

const Banner = ({loading}) => {
  const [count, setCount] = useState(0);
  const [imageLoad, setImageLoad] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [opacity, setOpacity] = useState(5);

  {
    loading
      ? setTimeout(() => {
          if (count < 4) {
            setCount(count + 1);
          } else {
            setCount(0);
          }
        }, 50)
      : null;
  }

  return (
    <View>
      <Svg width={width} height={height / 2} style={{}}>
        <ClipPath id="carafumando">
          <Polygon
            points={`
          0,0 
          ${width * 0.11},0 
          ${width * 0.5},${height * 0.2} 
          0,${height * 20}
          `}
          />
        </ClipPath>
        <Image
          clipRule="nonzero"
          x={width * -0.021}
          y={height * -0.0559}
          width={width * 0.66}
          height={height * 0.255}
          preserveAspectRatio="xMinYMin slice"
          opacity={count === 0 ? '0.70' : '0.50'}
          href={require('../../../../../assets/18.png')}
          clipPath="url(#carafumando)"
        />
      </Svg>

      <Svg style={{position: 'absolute'}}>
        <ClipPath id="minadevermelho">
          <Polygon
            points={`
          ${width * 0.11},0 
          ${width * 0.88}, 0 
          ${width * 0.478},${height * 0.19}
          `}
            fill="#f803fc"
          />
        </ClipPath>

        <Image
          clipRule="nonzero"
          x={-14}
          y={-45}
          width={width}
          height={height * 0.24}
          preserveAspectRatio="xMinYMin slice"
          opacity={count === 1 ? '0.70' : '0.50'}
          href={require('../../../../../assets/14.png')}
          clipPath="url(#minadevermelho)"
        />
      </Svg>

      <Svg style={{position: 'absolute'}}>
        <ClipPath id="doutorestranho">
          <Polygon
            points={`
          ${width * 0.88},0 
          ${width},0 
          ${width},${height * 0.14} 
          ${width * 0.58}, ${height * 0.14}
          `}
            fill="#0508e6"
          />
        </ClipPath>
        <Image
          clipRule="nonzero"
          x={width * 0.001}
          y={height * -0.04}
          width={width}
          height={height * 0.27}
          preserveAspectRatio="xMaxYMax meet"
          opacity={count === 2 ? '0.70' : '0.50'}
          href={require('../../../../../assets/166.png')}
          clipPath="url(#doutorestranho)"
        />
      </Svg>
      <Svg style={{position: 'absolute'}}>
        <ClipPath id="bradpitt">
          <Polygon
            points={`
          ${width * 0.58},${height * 0.14} 
          ${width},${height * 0.135} 
          ${width},${height * 0.26} 
          ${width * 0.7085}, ${height * 0.32}
          ${width * 0.4768}, ${height * 0.1888}
          `}
            fill="#607020"
          />
        </ClipPath>
        <Image
          clipRule="nonzero"
          x={width * 0.3}
          y={height * 0.075}
          width={width * 0.72}
          height={height * 0.39}
          preserveAspectRatio="xMidYMid meet"
          opacity={count === 3 ? '0.70' : '0.5'}
          href={require('../../../../../assets/15.jpg')}
          clipPath="url(#bradpitt)"
        />
      </Svg>
      <Svg position="absolute">
        <ClipPath id="mecbeth">
          <Polygon
            points={`
          0,${height * 0.199}
          ${width * 0.496}, ${height * 0.1996}
          ${width * 0.70934}, ${height * 0.32}
          0, ${height * 0.455}
          `}
            fill="black"
          />
        </ClipPath>
        <Image
          clipRule="nonzero"
          x={0}
          y={70}
          width={width * 0.783}
          height={height * 0.48}
          preserveAspectRatio="xMidYMid meet"
          opacity={count === 4 ? '0.70' : '0.50'}
          href={require('../../../../../assets/17.png')}
          clipPath="url(#mecbeth)"
        />
      </Svg>
      <Svg style={styles.logo}>
        <ClipPath id="logo">
          <Rect x={0} y={0} width={0.54 * width} height={0.25 * height} />
        </ClipPath>
        <Image
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#logo)"
          x={-9}
          y={0}
          width={0.54 * width}
          height={0.25 * height}
          href={require('../../../../../assets/logo.png')}
        />
      </Svg>
    </View>
  );
};

export default Banner;
