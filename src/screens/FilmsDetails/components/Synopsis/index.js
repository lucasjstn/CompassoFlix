import React, {useReducer} from 'react';
import { View, TouchableOpacity} from 'react-native';
import styles from './style';
import { TextRegular } from '../../../../components/Text';

export default Synopsis = ({
  overview,
  tagline,
  synopsisTitle,
  more,
  seeLess,
}) => {
  const [aboutName, tradeAboutName] = useReducer(
    aboutName => !aboutName,
    false,
  );

  return (
    <View style={styles.container}>
      <TextRegular style={styles.synopsisTitle}>{tagline || synopsisTitle}</TextRegular>
      <TextRegular numberOfLines={aboutName ? 1000 : 4} style={styles.synopsisContent}>
        {overview}
      </TextRegular>

      <TouchableOpacity
        style={{display: overview?.length > 227 ? 'flex' : 'none'}}
        onPress={tradeAboutName}>
        <TextRegular style={styles.about}>{aboutName ? seeLess : more}</TextRegular>
      </TouchableOpacity>
    </View>
  );
};
