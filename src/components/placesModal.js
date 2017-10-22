import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import { styles } from '../styles/styles.js';

import RNGooglePlaces from 'react-native-google-places';

export class PlacesModal extends Component {
    constructor(props){
        super(props);
        this.state = { placeDetails : ''};
    }
    
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal().then((place) => {
            console.log(place.longitude + ' : ' + place.latitude);
            this.setState(previousState => {
                return { placeDetails: place.longitude + ' ' + place.latitude }
            });
        }).catch(error => console.log(error.message));
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.openSearchModal()}>
                    <Text style={styles.addressSearch}>Enter your address</Text>
                    <Text>{this.state.placeDetails}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}