import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import MapView from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <MapView 
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}
        style={styles.mapView}
      />
    );
  }
}

const styles = StyleSheet.create({
  mapView:{
    position: 'absolute',
    top: 0,
    left:0,
    right: 0,
    bottom: 0
  }
});
