import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ListOfMoviesComponent from './FlatlistComponent';

export default function ContentList({content, endProp, pageNumber}) {

  // switch(numberOfColumns) {
  //   case numberOfColumns > 500

  // }

  return (
    <>
      <FlatList
        data={content}
        renderItem={({item}) => <ListOfMoviesComponent {...item} />}
        keyExtractor={(_, index) => index}
        numColumns={4}
        ListFooterComponent={<ActivityIndicator color={'red'} />}
        onEndReached={endProp}
        onEndReachedThreshold={0.2}
      />
    </>
  );
}
