import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style'
import { apiImage } from '../../../../service/api';

export default FilmsDetails = ({ title, release, voteAverage, runTime, popularity, urlFrontCover, urlPoster, director }) => {
    return (
        <View>
            <Image
                source={{uri: `${apiImage.defaults.baseURL}/original${urlPoster}`}}
                
                style={styles.poster} />
            <Image
                source={{ uri: `${apiImage.defaults.baseURL}/w500${urlFrontCover}` }}
                style={styles.frontCover}
            />
            <View style={styles.mainWrapper}>
                <View style={styles.mainTextWrapper}>
                    <Text style={styles.frontCoverTitle}>{title} <Text style={styles.frontCoverLaunch}>{release}</Text></Text>
                    <Text style={styles.frontCoverMin}>{runTime} min</Text>
                </View>
                <Text style={styles.directorText}>Direção por <Text style={{ fontWeight: '700' }}>{ director.name || 'NameLess' }</Text></Text>

                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>{voteAverage}/10</Text>
                    <View style={styles.votesWrapper}>
                        <Icon
                            name='favorite'
                            size={30}
                            color='red'
                        />
                        <Text style={styles.votesText}>{popularity}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}