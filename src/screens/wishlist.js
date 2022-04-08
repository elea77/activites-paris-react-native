import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import { Title } from '../components/text'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import allTheActions from '../actions'

const Wishlist = ({navigation}) => {

  const favorites = useSelector(state => state.favorites.favoritesList)

  console.log(favorites)

  return (
    <Container>
        <Title>Wishlist</Title>
    </Container>
  )
}

Wishlist.propTypes = {}

export default Wishlist