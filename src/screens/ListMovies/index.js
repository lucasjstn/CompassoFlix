/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
import IconReturn from 'react-native-vector-icons/AntDesign';
import Toggle from 'react-native-toggle-element';
import IconEye from 'react-native-vector-icons/Ionicons';
import IconPencil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Octicons';
import {list} from './mock/listOfItems';
import BtnGoBack from '../../components/BtnGoBack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
export default function ListMovies() {
  const navigation = useNavigation();

  const [toggleValue, setToggleValue] = useState(false);
  const [setModal] = useState(false);

  useEffect(() => {
    console.log('poster_path', list.items[1].poster_path);
  }, []);

  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     {/* {Object.keys(list).map(item => (
    //     <Text style={{color: 'green', top: '50%'}}>{item}</Text>
    //   ))} */}

    //     <View style={styles.favoriteMoviesWrapper}>
    //       {list.items.reverse().map((item, index) => (
    //         <>
    //           <TouchableOpacity key={index} style={{backgroundColor: 'blue'}}>
    //             <Image
    //             key={index}
    //               testID="capa do filme"
    //               source={{
    //                 uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
    //               }}
    //               style={styles.favoriteImageWrapper}
    //             />
    //             {toggleValue && (
    //               <TouchableOpacity
    //                 key={index}
    //                 style={styles.delete}
    //                 onPress={() => {
    //                   setModal(true);
    //                 }}>
    //                 <Icon name={'horizontal-rule'} size={6} color={'red'} />
    //               </TouchableOpacity>
    //             )}
    //           </TouchableOpacity>
    //         </>
    //       ))}
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <ScrollView style={{flexGrow: 1}} contentContainerStyle={{flexGrow: 1}}>
        {/* <View style={{flex: 1, backgroundColor: 'black'}}></View> */}
        <BtnGoBack
          modal={() => navigation.navigate('ProfileScreen')}
          style={{top: 20, left: 20, position: 'absolute'}}
        />
        {
          <View style={{flexDirection: 'row', left: 200}}>
            <Text style={{color: 'green'}}>{list.items[1].id}</Text>
          </View>
        }
        <View>
          <Toggle
            value={toggleValue}
            onPress={newState => {
              setToggleValue(newState);
            }}
            containerStyle={styles.toggleContainer}
            trackBarStyle={styles.trackBarStyle}
            trackBar={styles.trackBar}
            thumbButton={styles.thumbButton}
            animationDuration={250}
            leftComponent={
              <IconEye
                name={'eye'}
                size={14}
                color={toggleValue ? '#000' : '#FFF'}
              />
            }
            rightComponent={
              <IconPencil
                name={'pencil'}
                size={18}
                color={toggleValue ? '#FFF' : '#000'}
              />
            }
          />
        </View>

        <Text style={styles.nameList}>Filmes que mudaram a minha vida</Text>

        <Text style={styles.descriptionList}>
          Essa é uma lista de filmes que vai mudar a sua vida e gerar reflexão
          sobre diversos temas. Aproveite para unir o útil ao agradável e usar
          seu tempo livre para conhecer histórias inspiradoras.
        </Text>
        {/* <Text style={styles.descriptionList}>{typeof list.items}</Text> */}
        <View style={styles.favoriteMoviesWrapper}>
          {list.items.reverse().map((item, index) => (
            <>
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate('TelaStack', {
                //     screen: 'Details',
                //     params: {id: item.id},
                //   })
                // }
                key={index}
                style={{backgroundColor: 'blue'}}>
                <Image
                  key={index}
                  testID="capa do filme"
                  source={{
                    uri: `https://image.tmdb.org/t/p//w185${item.poster_path}`,
                  }}
                  style={styles.favoriteImageWrapper}
                />
                {toggleValue && (
                  <TouchableOpacity
                    key={index}
                    style={styles.delete}
                    onPress={() => {
                      setModal(true);
                    }}>
                    <Icon name={'horizontal-rule'} size={6} color={'red'} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </>
          ))}
          <View
            style={{
              backgroundColor: 'black',
              height: 200,
              width: '100%',
            }}></View>
        </View>

        {/* alignItems */}
      </ScrollView>
    </View>
  );
}
