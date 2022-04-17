import React, { useState, useEffect } from 'react';
import { ScrollView } from '../components/layout'
import { CommonText, Title } from '../components/text'
import SettingsLine from '../components/settingsLine'

const Settings = () => {

  return (
    <ScrollView>
      <Title>Settings</Title>
      <SettingsLine title="Langue (Fr / En)" settingType="language"/>
      <SettingsLine title="Thème sombre" settingType="theme"/>
    </ScrollView>
  )
}

Settings.propTypes = {}

export default Settings