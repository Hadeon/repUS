import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './views/homeScreen.js';
import RepScreen from './views/repScreen.js';
import RepDetails from './views/repDetails.js';

export const mobile = StackNavigator({
   Home: { screen: HomeScreen },
   RepScreen: { screen: RepScreen },
   RepDetails: { screen: RepDetails }
});
