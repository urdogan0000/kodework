import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import FavouriteJobCard from '../../Components/Cards/FavouriteJobCard'

import {useSelector} from 'react-redux';

function FavouriteJobList() {
  const favouriteJobs = useSelector(s => s.favouriteJobs);

  const renderFavouriteJobs = ({item}) => {
    return <FavouriteJobCard job={item}></FavouriteJobCard>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={favouriteJobs}
        renderItem={renderFavouriteJobs}></FlatList>
    </SafeAreaView>
  );
}

export default FavouriteJobList;
