import React, { useState, useEffect } from 'react'
import { ContainerSafeArea } from '../components/layout'
import { Title } from '../components/text'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import allTheActions from '../actions'
import { FlatList } from 'react-native'
import Button from '../components/button'
import { clearFavorites } from '../actions/favorites'

const Wishlist = ({navigation}) => {
  
  const favorites = useSelector(state => state.favorites.favoritesList)

  return (
    <ContainerSafeArea>
        <Title>Wishlist</Title>

        {
          favorites.length == 0 
          ?
          <Text>
            Vous n'avez pas de favoris
          </Text>
          :
          <FlatList
            pagingEnabled={true}
            data={favorites}
            numColumns={2}
            keyExtractor={item => item.recordid}
            renderItem={({ item }) => (
              <Button item={item} navigation={navigation} />
            )}
          />
        }
    </ContainerSafeArea>
  )
}

const Text = styled.Text``

Wishlist.propTypes = {}

export default Wishlist