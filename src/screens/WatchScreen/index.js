import React, { useState, useCallback, useEffect } from "react";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import { api } from "../../service/api";

export default function WatchScreen({id}) {
    
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [videoKey, setVideoKey] = useState('')

    const getVideo = async() => {
        await api.get(`/movie/${id}/videos?&language=en-US`).then(res => setVideoKey(res.data.results.filter(item => item.type === 'Trailer')[0]))
    }

    useEffect(() => {
        getVideo()
    }, [id])

    getYoutubeMeta('ov_IhB27uPc').then(meta => {
        setHeight(meta?.height);
        setWidth(meta?.width);
    });

    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    return (
        <YoutubePlayer
            height={ height * 1.8 }
            width={ width * 1.8 }
            play={playing}
            videoId={videoKey.key}
            onChangeState={onStateChange}
        />
    );
}