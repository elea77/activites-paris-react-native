import React, { useState, useEffect } from 'react';
import MapView, { Marker, Overlay } from 'react-native-maps';
import allTheActions from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AbsoluteView, ContainerView } from '../components/layout';
import Modal from '../components/modal';

const Map = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  
  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(50))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [dispatch])

  const onMarkerPress = (item) => { 
    setItem(item);
  }
  
  return (
    <ContainerView>
      <MapView
        style={{ width: "100%", height: "100%"}}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onMarkerSelect={() => setModal(true)} 
        onMarkerDeselect={() => setModal(false)}
        moveOnMarkerPress={true} >
          {activities.map((item, index) => (
            <Marker
              key={index}
              coordinate={{ latitude : item.fields.lat_lon?.[0] , longitude : item.fields.lat_lon?.[1] }}
              title={item.fields.title}
              onPress={() => onMarkerPress(item)}
            />
          ))}
      </MapView>
      { modal ? 
        <AbsoluteView>
          <Modal item={item} navigation={navigation} />
        </AbsoluteView>
      : null }
    </ContainerView>
  )
}


Map.propTypes = {}

export default Map