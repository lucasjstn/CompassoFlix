import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import getMovies from '../../screens/FilmsDetails/apiGets';
import {api} from '../../service/api';

export default function Favorite({style, id}) {
  const animation = useRef(null);
  const firstRender = useRef(true);
  const [markFav, setMarkFav] = useState(false);

  const {data: favorite} = getMovies(`/movie/${id}/account_states?&`);

  const markOrUnmark = async () => {
    await api
      .post('/account/ACCOUNT_ID/favorite?&', {
        media_type: 'movie',
        media_id: id,
        favorite: !markFav,
      })
      .then(() => {
        setMarkFav(!markFav);
      }).catch(err => {throw new Error('deu erro aqui ô ' + err)})
  };

  useEffect(() => {
    if (favorite?.favorite !== undefined) {
      if (firstRender.current) {
        setMarkFav(favorite?.favorite);
        if (favorite?.favorite) {
          animation.current.play(61, 61);
        } else {
          animation.current.play(18, 18);
        }
        firstRender.current = false;
      } else if (markFav) {
        animation.current.play(10, 61);
      } else {
        animation.current.play(18, 18);
      }
    }
  }, [favorite?.favorite, markFav]);

  return (
    <TouchableOpacity
      style={style || styles.container}
      activeOpacity={0.7}
      onPress={() => {
        markOrUnmark();
      }}>
      <LottieView
        source={require('../../../assets/lottieAnimates/StartAnimated.json')}
        loop={false}
        autoPlay={false}
        ref={animation}
      />
    </TouchableOpacity>
  );
}
