import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import getMovies from '../../screens/ProfileScreen/getMovies';

export default function Favorite({style, id}) {
    const animation = useRef(null);
    const firstRender = useRef(true);


    const {data: favorite} = getMovies(`/movie/${id}/account_states?&session_id=`);

    useEffect(() => {
        if(favorite?.favorite !== undefined) {
            if(firstRender.current) {
                if(favorite?.favorite) {
                    animation.current.play(61, 61);
                }else {
                    animation.current.play(18, 18);
                }
                firstRender.current = false;
            }else if(favorite?.favorite) {
                animation.current.play(10, 61);
    
            }else {
                animation.current.play(18,18);
            }
        }
    }, [favorite?.favorite])

  return (
    <TouchableOpacity style={style || styles.container} activeOpacity={0.7}>
      <LottieView
        source={require('../../../assets/lottieAnimates/StartAnimated.json')}
        loop={false}
        autoPlay={false}
        ref={animation}
      />
    </TouchableOpacity>
  );
}
