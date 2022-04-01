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
        {/* <LessonsContainer>
          <Text>Test</Text>
          <LessonButtonContainer>
            {activities[0] ? (
              activities.map(activity => (
                <View
                  key={activity.recordid}
                  // cover={activity.cover?.url}
                >
                  <Text>{activity.fields.title_event}</Text>
                </View>
              ))
            ) : (
              <Text>Pas de leçons disponible</Text>
            )}
            </LessonButtonContainer>
        </LessonsContainer> */}
        <FlatList
          pagingEnabled={true}
          data={activities}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
               <Image
               source={{
                 uri: item.fields.cover_url
               }}
             />
          )}
      />
    </Container>
  )
}

Home.propTypes = {}

const Text = styled.Text``

const Image = styled.Image`
  width: 300px;
  height: 200px;
  borderRadius: 15px
  margin: 5px
`



export default Home