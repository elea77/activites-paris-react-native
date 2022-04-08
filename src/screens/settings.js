import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import { CommonText, Title } from '../components/text'
import styled from 'styled-components'
import SettingsLine from '../components/settingsLine'

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container>
        <Title>Settings</Title>
        <SettingsLine/>
    </Container>
  )
}

Settings.propTypes = {}

export default Settings