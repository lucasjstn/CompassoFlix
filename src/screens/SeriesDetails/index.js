import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';
import apiGets from '../FilmsDetails/apiGets';
import Loading from '../../components/Loading';
import BtnGoBack from '../../components/BtnGoBack';
import {TextRegular} from '../../components/Text';
import HeaderDetails from '../../components/HeaderDetails.js';
const SeriesDetails = ({route, navigation}) => {
  const {id} = route.params;
  const {data: dataDetails} = apiGets(`/tv/${id}?&language=pt-BR`);
  const {data: dataCredits} = apiGets(`/tv/${id}/credits?&language=pt-BR`);

  return <></>;
};

export default SeriesDetails;
