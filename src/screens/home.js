import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import Button from '../components/button'

const Home = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()

  const [rows, setRows] = useState(10)

  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(rows))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
    }
  }, [rows, dispatch])

  return (
    <Container>
        <Title>Activités sur Paris</Title>
        <FlatList
          pagingEnabled={true}
          data={activities}
          numColumns={2}
          keyExtractor={item => item.recordid}
          onEndReached={() => setRows(rows + 6)}
          renderItem={({ item }) => (
            <Button item={item} navigation={navigation} />
          )}
      />
    </Container>
  )
}

Home.propTypes = {}


export default Home