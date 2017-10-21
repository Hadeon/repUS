import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/homeScreen.js';
import RepScreen from './containers/repScreen.js';
import RepDetails from './containers/repDetails.js';

export const mobile = StackNavigator({
   Home: { screen: HomeScreen },
   RepScreen: { screen: RepScreen },
   RepDetails: { screen: RepDetails }
});
