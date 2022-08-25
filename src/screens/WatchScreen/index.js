import React, {useState, useCallback, useEffect} from 'react';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {api} from '../../service/api';

export default function WatchScreen({id}) {
  const [videoKey, setVideoKey] = useState({});
  const [metaRanger, setMetaRanger] = useState({height: 200, width: 200});
  const [playing, setPlaying] = useState(false);

  const getVideo = async () => {
    try {
      const res = await api.get(`/movie/${id}/videos?&language=en-US`);
      setVideoKey(res.data.results.find(item => item.type === 'Trailer'));
    } catch (error) {
      throw new Error(`deu erro aqui ô: ${err}`);
    }
  };

  const getMetaData = async () => {
    try {
      const meta = await getYoutubeMeta(videoKey?.key);
      setMetaRanger({height: meta?.height, width: meta?.width});
    } catch (error) {
      throw new Error(`deu erro aqui : ${err}`);
    }
  };

  useEffect(() => {
    if (!videoKey?.key) return;
    getMetaData();
  }, [videoKey]);

  useEffect(() => {
    getVideo();
  }, [id]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <YoutubePlayer
      height={200}
      width={metaRanger.width * 1.8}
      play={playing}
      videoId={videoKey?.key}
      onChangeState={onStateChange}
    />
  );
}
