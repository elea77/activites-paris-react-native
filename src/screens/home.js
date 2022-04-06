import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';

const Home = ({navigation}) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTheActions.activities.getActivities({}))
    return () => {
      dispatch(allTheActions.activities.clearActivities())
      console.log(activities);
    }
  }, [dispatch])

  return (
    <Container>
        <Title>Home</Title>
        <FlatList
          pagingEnabled={true}
          data={activities}
          keyExtractor={item => item.recordid}
          renderItem={({ item }) => (
            <Button onPress={() => navigation.navigate('Details', { id: item.id })}>

              <Image
                source={{
                  uri: item.fields.cover_url
                }}
              />
              <Text>{item.fields.title_event}</Text>
            </Button>
          )}
      />
    </Container>
  )
}

Home.propTypes = {}

const Button = styled.TouchableOpacity`
`

const Text = styled.Text``

const Image = styled.Image`
  width: 300px;
  height: 200px;
  borderRadius: 15px
  margin: 5px
`



export default Home