import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import { styles } from '../styles/styles.js';

export default class RepScreen extends Component {
    static navigationOptions = {
        title: 'RepScreen',
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.largeHeader}>Representatives</Text>
                <Button
                    onPress={() => navigate('RepDetails')}
                    title="Senator Kamala Harris"
                    />
            </View>
        );
    }
}
