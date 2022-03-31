import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Home = ({navigation}) => {

  return (
    <Container>
        <Text>Bonjour</Text>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  color: white;
  margin: 10px
  marginTop: 20px
`

const Text = styled.Text``

export default Home