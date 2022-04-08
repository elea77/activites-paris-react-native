import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Map = ({navigation}) => {
  // const activities = useSelector(state => state.activities.activitiesList)
  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(allTheActions.activities.getActivities(10))
  //   return () => {
  //     dispatch(allTheActions.activities.clearActivities())
  //   }
  // }, [dispatch])
  
  return (
      <MapView
        style={{ width: "100%", height: "100%"}}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }} >
          {/* {
            activities.map((item => {
              <Marker
                coordinate={{ latitude : item.fields.lat_lon , longitude : item.fields.lat_lon }}
              />
            }))
          } */}
      </MapView>
  )
}

Map.propTypes = {}

export default Map