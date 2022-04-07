import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';

const Map = ({navigation}) => {

  return (
      <MapView
        style={{ width: "100%", height: "100%"}}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }} >
          <Marker
            coordinate={{ latitude : 48.8639054409326 , longitude : 2.30169843891035 }}
          />
      </MapView>
  )
}

Map.propTypes = {}

export default Map