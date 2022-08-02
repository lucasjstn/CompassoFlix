import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style';

export default FilmsDetails = () => {
    return (
        <View>
            <View style={styles.poster}></View>
            <View style={styles.frontCover}></View>
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
                        />
                        <Text STYLE={styles.votesText}>30k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}