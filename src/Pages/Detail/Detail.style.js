import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  upperContainerText1: {
    color: '#FF5C58',
    fontWeight: 'bold',
    fontSize: 18,
  },
  upperContainerText2: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  middleText: {
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },detail:{
      backgroundColor:'#fff',
      height:'30%'
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
});
