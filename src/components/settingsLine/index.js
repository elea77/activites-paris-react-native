import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import allTheActions from '../../actions'

const SettingsLine = ({title, settingType}) => {

    const [setting, setSetting] = useState()
    const language = useSelector(state => state.settings.language)
    const theme = useSelector(state => state.settings.theme)
    
    const dispatch = useDispatch()
    
    const settingChange = () => {
        if(settingType == "language") {
            dispatch(allTheActions.settings.changeLanguage())
        }
        if(settingType == "theme"){
            dispatch(allTheActions.settings.changeTheme())
        }
    }

    useEffect(() => {
        if(settingType == 'language'){
            setSetting(language)
        }
    
        if(settingType == 'theme'){
            setSetting(theme)
        }
    }, [language, theme])

    return (
        <View>
            <Text>{title}</Text>
            <Switch
                onValueChange={settingChange}
                value={setting}
            />
        </View>
    )
}

const View = styled.View`
    flex: 1;
    flexDirection: row;
    flexWrap: wrap;
    alignItems: center;
    marginBottom: 10px;
`

const Text = styled.Text`
    width: 80%;
    fontSize: 16px;
    color: ${props => props.theme.TEXT_COLOR};
`

const Switch = styled.Switch`
    width: 20%;
`


export default SettingsLine