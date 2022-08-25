import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HeaderDetails from '../../components/HeaderDetails';
import Synopsis from '../../components/Synopsis';
import Cast from './components/Cast';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import mockFilmsDetails from '../../mocks/filmsDetails';
import Loading from '../../components/Loading';
import apiGets from './apiGets';
import Favorite from '../../components/Favorite';

export default FilmsDetails = ({route, navigation}) => {
  const {id} = route.params;
  const {data: dataDetails} = apiGets(`/movie/${id}?&language=pt-BR`);
  const {data: dataCredits} = apiGets(`/movie/${id}/credits?&language=pt-BR`);
  
  return !!dataCredits ? (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.btnWrapper}>
        <BtnGoBack nav={navigation} />
        <Favorite id={id}/>
      </View>
      <HeaderDetails
        {...dataDetails}
        director={dataCredits?.crew}
        {...mockFilmsDetails.header}
        id={id}
        isSerie={false}
      />
      <Synopsis {...dataDetails} />
      <Cast cast={dataCredits?.cast} {...mockFilmsDetails.cast} />
    </SafeAreaView>
  ) : (
    <Loading />
  );
};
