import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

import { styles } from '../styles/styles.js';

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
                <Text style={styles.largeHeader}>Landing Page</Text>
                <Text style={styles.mediumHeader}>Lookup By Address</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
                <Button
                    onPress={() => navigate('RepScreen')}
                    title="Representatives"
                    />
            </View>
        );
    }
}
