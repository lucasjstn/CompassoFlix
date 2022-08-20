import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {TextBold, TextRegular} from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderDetails = () => {
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [toggleLines, setToggleLines] = useState(true);

  const temps = ['primeira temporada', 'segunda temporada'];

  return (
    <>
      <View style={styles.bannerContainer}>{null}</View>
      <View style={styles.coverContainer}>
        <View>{null}</View>
        <TouchableOpacity
          style={styles.ratingButton}
          activeOpacity={0.8}
          onPress={() => setRatingModalVisible(true)}>
          <TextBold style={styles.ratingText}>Avalie agora</TextBold>
          {ratingModalVisible ? (
            <Modal onRequestClose={() => setRatingModalVisible(false)}>
              <TextRegular>Imma modal</TextRegular>
            </Modal>
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.titleAndDateContainer}>
        <TextBold numberOfLines={2} style={styles.title}>
          {'The Get Down'}
        </TextBold>
        <TextRegular style={styles.date}>{'2016'}</TextRegular>
      </View>

      <View style={styles.titleAndDateContainer}>
        <TextRegular style={styles.createdBy}>{'Criado por'}</TextRegular>
        <TextBold style={styles.author}>{'Baz Luhrmann'}</TextBold>
      </View>

      <TextRegular style={styles.rating}>{'7.8'}/10</TextRegular>

      <View style={styles.ratesInfoContaier}>
        <Icon name="favorite" size={30} color="red" />
        <TextRegular style={styles.numberOfRates}>{'18k'}</TextRegular>
      </View>

      <View style={styles.descriptionContainer}>
        <TextRegular
          numberOfLines={toggleLines ? 4 : null}
          style={styles.descriptionText}>
          Ambientada em Nova York durante o ano de 1977, The Get Down conta a
          história de como, à beira das ruínas e da falência, a grande metrópole
          deu origem a um novo movimento musical no Bronx, focado nos jovens
          negros e de minorias que são marginalizados.Ambientada em Nova York
          durante o ano de 1977, The Get Down conta a história de como, à beira
          das ruínas e da falência, a grande metrópole deu origem a um novo
          movimento musical no Bronx, focado nos jovens negros e de minorias que
          são marginalizados.
        </TextRegular>
        <Text
          onPress={() => setToggleLines(!toggleLines)}
          style={{color: 'white'}}>
          ver mais.
        </Text>
        <View style={styles.seasonsContainer}>
          {temps.map(item => {
            return (
              <View style={styles.season}>
                <TextRegular style={{color: 'white'}}>{item}</TextRegular>
              </View>
            );
          })}
        </View>
      </View>
      {/* <TextBold style={{color: 'white'}}>askdaskdska</TextBold> */}
    </>
  );
};

export default HeaderDetails;
