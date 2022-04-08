import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';

const Details = ({ route }) => {
   
  const favorites = useSelector(state => state.favorites.favoritesList)
  const dispatch = useDispatch()

  const {
    params: { item }
  } = route

  const test = () => {
    dispatch(allTheActions.favorites.checkFavorite(item.recordid))
  }

  useEffect(() => {
    console.log('mes favoris:', favorites);
  }, [favorites])

  return (
    <Container>
        <Title>{item.fields.title}</Title>
        <Button 
          onPress={() => test()}
        >
          <Text>sheeeeeesh</Text>
        </Button>
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
  border-radius: 15px;
  margin: 5px;
`



export default Details