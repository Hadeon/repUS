import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { styles } from '../styles/styles.js';

export default class RepDetails extends Component {
    static navigationOptions = {
        title: 'RepDetails',
    };
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.largeHeader}>
                Senator Kamala Harris
                </Text>
                <Text style={styles.mediumHeader}>This is where all the representative details will be constructed</Text>
            </View>
        );
    }
}
