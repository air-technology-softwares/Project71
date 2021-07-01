import React from 'react';
import { View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppHeader from './Component/AppHeader';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
import db from './config';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.nav}>
       <AppContainer />
      </View>
    )
  }
}


const TabNavigator = createBottomTabNavigator(

  {
    Read:{screen: ReadScreen},
    Write:{screen: WriteScreen},
  }

)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  nav:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});