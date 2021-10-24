import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import styles from './JobList.style';
import useFetch from '../../useFetchHook/useFetch';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading';
import JobCard from '../../Components/Cards/JobCard';

const url = 'https://www.themuse.com/api/public/jobs?page=';

function JobList({navigation, route}) {
  const [page, setpage] = useState(1);
  const {data, error, loading, footerLoading, fetchDataforPagination} =
    useFetch();

  useEffect(() => {
    fetchDataforPagination(`${url}${page}`);
  }, [page]);

  function handlePress(id, name) {
    navigation.navigate('Detail', {id, name});
  }

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  const renderJobs = ({item}) => {
    return (
      <JobCard
        job={item}
        onPress={() => handlePress(item.id, item.name)}></JobCard>
    );
  };
  const renderFooter = () => {
    if (footerLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
  };

  const loadMoreJobs = () => {
    setpage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderJobs}
        ListFooterComponent={renderFooter()}
        onEndReached={loadMoreJobs}
        onEndReachedThreshold={0.8}></FlatList>
    </SafeAreaView>
  );
}

export default JobList;
