import React from 'react'
import { ContainerSafeArea } from '../components/layout'
import { CommonText } from '../components/text'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import Button from '../components/button'
import { useTranslation } from 'react-i18next'

const Wishlist = ({navigation}) => {
  
  const favorites = useSelector(state => state.favorites.favoritesList)
  const { t } = useTranslation()
  return (
    <ContainerSafeArea>

        {
          favorites.length == 0 
          ?
          <CommonText>
            { t('page.favList') }
          </CommonText>
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

Wishlist.propTypes = {}

export default Wishlist