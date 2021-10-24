import React, {useEffect} from 'react';

import HTMLView from 'react-native-htmlview';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './Detail.style';
import Button from '../../Components/Button';
import useFetch from '../../useFetchHook/useFetch';
import {useDispatch, useSelector} from 'react-redux';

const url = 'https://www.themuse.com/api/public/jobs/';
function Detail({route, navigation}) {
  const dispatch = useDispatch();
  const jobs = useSelector(s => s.favouriteJobs);
  const {data2, loading, fetchData} = useFetch();
  const {id, name} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    fetchData(`${url}${id}`);
  }, []);

  //add jobs to Favourite jobs and checks the job is exist or not in Favourite job list
  const addToFovouriteJob = () => {
    const result = jobs.some(job => job.id === data2.id);

    if (result) {
      alert('You add this job to Favourite List before');
    } else {
      dispatch({type: 'ADD_FAVOURİTE_JOB', payload: {job: data2}});
      alert(data2.name.toString() + ' is added to your Favourite Jobs')
    }
  };
  const handlePress = () => {
    alert('işlem yapılıyor');
  };
  if (loading) {
    return <ActivityIndicator size={'large'}></ActivityIndicator>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{data2.name}</Text>
      <View style={styles.upperContainer}>
        <Text style={styles.upperContainerText1}>Locations: </Text>
        <Text style={styles.upperContainerText2}>
          {data2.locations && data2.locations.length > 0
            ? data2.locations[0].name
            : 'Unknown Location'}
        </Text>
      </View>
      <View style={styles.upperContainer}>
        <Text style={styles.upperContainerText1}>Job Level: </Text>
        <Text style={styles.upperContainerText2}>
          {data2.levels && data2.levels.length > 0
            ? data2.levels[0].name
            : 'Unknown level'}
        </Text>
      </View>

      <Text style={styles.middleText}>Jobs Detail </Text>
      <ScrollView style={styles.detail}>
        <HTMLView value={data2.contents}></HTMLView>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          name="exit-to-app"
          color="white"
          size={20}
          onPress={handlePress}></Button>
        <Button
          title="Favourite Job"
          name="heart"
          color="white"
          size={20}
          onPress={addToFovouriteJob}></Button>
      </View>
    </View>
  );
}

export default Detail;
