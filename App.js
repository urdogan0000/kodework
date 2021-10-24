import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Providers from './src/Context/provier';
import JobList from './src/Pages/JobList';
import FavouriteJobList from './src/Pages/FavouriteJobList/FavouriteJobList';
import Detail from './src/Pages/Detail/Detail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#FF5C58'},
        headerTintColor: '#FF5C58',
      }}>
      <Stack.Screen name="Jobs" component={JobList}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};
function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="JobList" component={JobsStack} />
          <Drawer.Screen name="FavouriteJobList" component={FavouriteJobList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Providers>
  );
}

export default App;
