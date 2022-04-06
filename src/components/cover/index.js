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
  width: 100%;
  minHeight: 120px;
  borderRadius: 5px;
  resizeMode: cover;
`

export default Cover