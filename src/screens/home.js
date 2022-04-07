import React, { useState, useEffect } from 'react'
import { ContainerSafeArea } from '../components/layout'
import { TitleListing } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import Button from '../components/button'

const Home = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(allTheActions.activities.getActivities())
    dispatch(allTheActions.activities.classicCall(10, 1))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [dispatch])

  return (
    <ContainerSafeArea>
        <TitleListing>Notre Sélection</TitleListing>
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