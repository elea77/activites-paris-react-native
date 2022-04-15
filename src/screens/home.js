import React, { useState, useEffect } from 'react'
import { ContainerSafeArea } from '../components/layout'
import styled from 'styled-components'
import { TitleListing } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import Button from '../components/button'
import MapModal from '../components/modal';
import ImageHome from '../components/imageHome'

const Home = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const activity = useSelector(state => state.activities.activityList)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(12, 2))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(allTheActions.activities.getOneActivity(1))
    return () => {
      dispatch(allTheActions.activities.clearActivity())
    }
  }, [dispatch])

  return (
    <ContainerSafeArea>
        <TitleListing>Activités sur Paris</TitleListing>
        <FlatList
          data={activity}
          keyExtractor={item => item.recordid}
          renderItem={({ item }) => (
            <ImageHome item={item} navigation={navigation} />
          )}
      />
        <FlatListStyle
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

const FlatListStyle = styled.FlatList`
  marginBottom: 180px;
`

export default Home