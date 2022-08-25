import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ListOfMoviesComponent from './FlatlistComponent';

export default function ContentList({content, endProp, pageNumber, stack}) {
  
  return (
    <>
      <FlatList
        data={content}
        renderItem={({item}) => <ListOfMoviesComponent {...item} stack={stack} />}
        keyExtractor={(_, index) => index}
        numColumns={4}
        ListFooterComponent={<ActivityIndicator color={'red'} />}
        onEndReached={endProp}
        onEndReachedThreshold={0.2}
      />
    </>
  );
}
