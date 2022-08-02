import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style'

export default FilmsDetails = () => {
    return (
        <View>
            <Image
                source={{uri: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg'}}
                
                style={styles.poster} />
            <Image
                source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg' }}
                style={styles.frontCover}
            />
            <View style={styles.mainWrapper}>
                <View style={styles.mainTextWrapper}>
                    <Text style={styles.frontCoverTitle}>The Batman <Text style={styles.frontCoverLaunch}>2022</Text></Text>
                    <Text style={styles.frontCoverMin}>176 min</Text>
                </View>
                <Text style={styles.directorText}>Direção por <Text style={{ fontWeight: '700' }}>Matt Reeves</Text></Text>

                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>8.5/10</Text>
                    <View style={styles.votesWrapper}>
                        <Icon
                            name='heart'
                            size={30}
                            color='red'
                        />
                        <Text style={styles.votesText}>30k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}