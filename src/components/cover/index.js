import React from 'react'
import styled from 'styled-components'

const Cover = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}


const Image = styled.Image`
    width: 300px;
    height: 200px;
    borderRadius: 15px;
    margin: 5px;
`

export default Cover