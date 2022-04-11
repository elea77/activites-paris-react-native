import React, { useState, useEffect } from 'react'
import { ContainerSafeArea } from '../components/layout'
import styled from 'styled-components'
import { TitleListing } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import Button from '../components/button'
import MapModal from '../components/modal';

const Home = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(10))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [dispatch])

  return (
    <ContainerSafeArea>
        <TitleListing>Activités sur Paris</TitleListing>
        <FlatList
          pagingEnabled={true}
          data={activities}
          numColumns={2}
          keyExtractor={item => item.recordid}
          renderItem={({ item }) => (
            <Button item={item} navigation={navigation} />
          )}
      />
    </ContainerSafeArea>
  )
}

Home.propTypes = {}


export default Home