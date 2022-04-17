import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import allTheActions from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message'

const ButtonFavorite = (props) => {

    const favorites = useSelector(state => state.favorites.favoritesList)
    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false)

    const checkFavorite = () => {
        dispatch(allTheActions.favorites.checkFavorite({recordid: props.activity.recordid, title: props.activity.fields.title, img: props.activity.fields.cover_url}))
        if(isFavorite){
            setIsFavorite(false)
            showMessage({
                message: `${props.activity.fields.title} à bien été enlevé des favoris`,
                type: 'danger'
            })
        }else{
            setIsFavorite(true)
            showMessage({
                message: `${props.activity.fields.title} à bien été ajouté aux favoris`,
                type: 'success'
            })
        }
    }

    useEffect(() => {
        const verifFav = favorites.map(f => f.recordid).findIndex(id => id === props.activity.recordid)
        if(verifFav != -1){
            setIsFavorite(true)
        }
    }, [])

    return (
        <View>
            <Icon onPress={() => checkFavorite()} name={isFavorite ? 'heart' : 'heart-outline'} color={'red'} size={28}/>
        </View>
    )
}

export default ButtonFavorite