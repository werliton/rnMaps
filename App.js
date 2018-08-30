import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import MapView from 'react-native-maps'

export default class App extends Component {

  state = {
    latitude:40.7143528,
    longitude:-74.0059731,
  }

  render() {
    const { latitude, longitude } = this.state
    
    return (
      <MapView 
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031
        }}
        style={styles.mapView}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        showsPointsOfInterest={false}
        showBuildings={false}
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
