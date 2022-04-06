import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';

const Details = ({ route }) => {
   
  const {
    params: { item }
  } = route


  return (
    <Container>
        <Title>{item.fields.title}</Title>
        
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