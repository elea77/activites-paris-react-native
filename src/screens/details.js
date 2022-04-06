import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';

const Details = ({navigation}) => {
  // const activities = useSelector(state => state.activities.activitiesList)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(allTheActions.activities.getActivities({}))
  //   return () => {
  //     dispatch(allTheActions.activities.clearActivities())
  //     console.log(activities);
  //   }
  // }, [dispatch])

  return (
    <Container>
        <Title>Details</Title>
        
    </Container>
  )
}

Details.propTypes = {}

const Button = styled.TouchableOpacity`
`

const Text = styled.Text``

const Image = styled.Image`
  width: 300px;
  height: 200px;
  borderRadius: 15px
  margin: 5px
`



export default Details