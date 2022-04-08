import React, { useState, useEffect } from 'react';
// import MapView, { Marker, Overlay } from 'react-native-maps';
import allTheActions from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'


const Map = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(50))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [dispatch])
  
  return (
    <View>
      {/* <MapView
        style={{ width: "100%", height: "100%"}}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >
          {activities.map((item, index) => (
            <Marker
              key={index}
              coordinate={{ latitude : item.fields.lat_lon?.[0] , longitude : item.fields.lat_lon?.[1] }}
              title={item.fields.title}
            />
          ))}
      </MapView> */}
    </View>
  )
}

const Text = styled.Text``
const View = styled.View``

Map.propTypes = {}

export default Map