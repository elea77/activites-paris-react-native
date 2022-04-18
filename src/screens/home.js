import React, { useEffect } from 'react'
import { ContainerSafeArea, ScrollView } from '../components/layout'
import { TitleListing } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import Button from '../components/button'
import ImageHome from '../components/imageHome'
import { useTranslation } from 'react-i18next'

const Home = ({ navigation }) => {
  const activities = useSelector(state => state.activities.activitiesList)
  const oneActivity = useSelector(state => state.activities.oneActivity)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTheActions.activities.getActivities(12, 2))
    dispatch(allTheActions.activities.getOneActivity(1))

    return () => {
      dispatch(allTheActions.activities.clearActivities())
      dispatch(allTheActions.activities.clearOneActivity())

    }
  }, [dispatch])

  const { t } = useTranslation()

  return (
    <ContainerSafeArea>
      <ScrollView>
        <TitleListing>{ t('page.homeTitle') }</TitleListing>  
        <FlatList
          data={oneActivity}
          keyExtractor={item => item.recordid}
          renderItem={({ item }) => (
            <ImageHome item={item} navigation={navigation} />
          )}
        />
        <FlatList
          pagingEnabled={true}
          data={activities}
          numColumns={2}
          keyExtractor={item => item.recordid}
          renderItem={({ item }) => (
            <Button item={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </ContainerSafeArea>
  )
}

Home.propTypes = {}



export default Home