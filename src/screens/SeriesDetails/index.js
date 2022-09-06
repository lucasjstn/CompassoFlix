import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import HeaderDetails from '../../components/HeaderDetails';
import Synopsis from '../../components/Synopsis';
import BtnGoBack from '../../components/BtnGoBack';
import styles from './style';
import mockSeriesDetails from '../../mocks/seriesDetails';
import Loading from '../../components/Loading';
import apiGets from '../FilmsDetails/apiGets';
import Favorite from '../../components/Favorite';
import Dropdown from '../../components/Dropdown';

const SeriesDetails = ({route, navigation}) => {
  const {id} = route.params;
  const {data: dataDetails} = apiGets(`/tv/${id}?&language=pt-BR`);

  return !!dataDetails ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.btnWrapper}>
          <BtnGoBack
            nav={navigation}
            modal={() => navigation.navigate('HomeSeries')}
          />
          <Favorite id={id} mediaType="tv" />
        </View>
        <HeaderDetails
          {...dataDetails}
          backdrop_path={dataDetails?.backdrop_path}
          poster_path={dataDetails?.poster_path}
          title={dataDetails?.name}
          release_date={dataDetails?.first_air_date}
          director={dataDetails?.created_by[0]}
          {...mockSeriesDetails.header}
          id={id}
          isSerie={true}
        />
        <Synopsis {...dataDetails} />
        {dataDetails?.seasons.map((item, index) => {
          if (item.air_date === null) return;
          if (item.name === 'Especiais') {
            return (
              <Dropdown
                key={index}
                id={id}
                name={item.name}
                path={item?.season_number}
              />
            );
          } else {
            return <Dropdown key={index} id={id} path={item?.season_number} />;
          }
        })}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loading />
  );
};

export default SeriesDetails;
