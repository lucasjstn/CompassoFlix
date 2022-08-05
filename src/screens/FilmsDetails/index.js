import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import { api } from '../../service/api'

export default FilmsDetails = ({ navigation }) => {

    const [titleOrigin, setTitleOrigin] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [tagLine, setTagLine] = useState('')
    const [release, setRelease] = useState('')
    const [voteAverage, setVoteAverage] = useState(0)
    const [runtime, setRuntime] = useState(0)
    const [popularity, setPopularity] = useState('')
    const [urlFrontCover, setUrlFrontCover] = useState('')
    const [urlPoster, setUrlPoster] = useState('')
    const [director, setDirector] = useState('')


    const getDetails = async () => {
        await api.get('/movie/854467?&language=pt-BR')
            .then((res) => {
                setTitleOrigin(res?.data?.title)
                setSynopsis(res?.data?.overview)
                setTagLine(res?.data?.tagline)
                setRelease(res?.data?.release_date)
                setVoteAverage(res?.data?.vote_average)
                setRuntime(res?.data?.runtime)
                setPopularity(res?.data?.popularity)
                setUrlFrontCover(res?.data?.poster_path)
                setUrlPoster(res?.data?.backdrop_path)
            })
            .catch(err => console.log(err))
    }
    
    const searchPeople = (array) => {

        setDirector(array?.filter(obj => obj.job === 'Director'))
        console.log(director)

    }

    const getCast = async () => {
        await api.get('/movie/919355/credits?&language=pt-BR')
        .then((res) => {
            searchPeople(res?.data?.crew)
        })
        .catch(err => console.log('deu erro aqui ô ' + err))
    }        


    useEffect(() => {
        getDetails()
        getCast()
    }, [])

    function transformInAround(number) {
        Math?.trunc(number)
        let string = String(number)
        if(number < 1000 ) {
            return number
        }else if(number < 10000) {
            string = string.slice(0,2)
            
            return `${string[1] > 0 ? string.replace(string.slice(0, 1), `${string.slice(0, 1)}.` ) : string.slice(0,1)}k`
        }else if(number < 1000000) {
            return `${number.toString().slice(0, number < 100000 ? 2 : 3)}k`
        }else if(number < 100000000) {
            return `${number.toString().slice(0, number < 10000000 ? 1 : 2)}kk`
        }else {
            return `${number.toString().slice(0, 3)}M+`
        }
        
    }

    return (
        <SafeAreaView style={styles.container} >
            
            
            <BtnGoBack nav={navigation} />
            <Header
                title={titleOrigin}
                release={release.slice(0, 4)}
                voteAverage={voteAverage.toFixed(1)}
                runTime={runtime}
                popularity={transformInAround(popularity)}
                urlFrontCover={urlFrontCover}
                urlPoster={urlPoster}
                director={director[0]}
            />
            <Synopsis overView={synopsis} tagLine={tagLine} />
            <Cast />
        </SafeAreaView>
    );
}
