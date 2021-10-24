import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import styles from './JobCard.style';
function JobCard({job,onPress}) {
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
      
    </TouchableOpacity>
  );
}

export default JobCard;
