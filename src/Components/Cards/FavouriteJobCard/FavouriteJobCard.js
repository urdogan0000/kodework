import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Button from '../../Button';
import styles from './FavouriteJobCard.style';
import {useDispatch} from 'react-redux'

function FavouriteJobCard({job, onPress}) {
  const dispatch=useDispatch()

  const removeFavouriteJob=()=>{
dispatch({type:'REMOVE_FAVOURİTE_JOB',payload:{id:job.id}})
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.job}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.locations}>
          {job.locations && job.locations.length > 0
            ? job.locations[0].name
            : 'Unknown Location'}
        </Text>
      </View>

      <Text style={styles.levelContainer}>
        {job.levels && job.levels.length > 0
          ? job.levels[0].name
          : 'Unknown level'}
      </Text>
      <Button title="Remove" onPress={removeFavouriteJob}></Button>
    </TouchableOpacity>
  );
}

export default FavouriteJobCard;
