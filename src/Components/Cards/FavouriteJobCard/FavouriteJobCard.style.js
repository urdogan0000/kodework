import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 10,
  },
  job: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft:10
  },
  company: {
    marginVertical:2,
    fontSize: 14,
    marginLeft:10
  },
  locationContainer: {
    flexWrap: 'wrap',
    marginLeft:10
  },
  locations: {
    backgroundColor: '#FF5C58',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
    overflow: 'hidden',
    borderRadius: 10,
  },
  levelContainer: {
    textAlign:'right',
    color:'#ff5c58',
    fontWeight:'bold',
    marginRight:10,
    marginBottom:10
  },
});
