import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

import { styles } from '../styles/styles.js';

import { PlacesModal } from './placesModal.js';

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = { text: '' };
    }

    static navigationOptions = {
        title: 'Home',
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.largeHeader}>
                    repUS
                </Text>
                <Text style={styles.info}>
                    In order to identify which district you are associated with, please search for your address below. This data is merely to identify the district number, your address will not be saved.
                </Text>
                <PlacesModal/>
                <View style={styles.lineBreak}/>
                <Button
                    onPress={() => navigate('RepScreen')}
                    title="Representatives"
                    />
            </View>
        );
    }
}
