import React, { useState, useEffect } from 'react';
import { ScrollView } from '../components/layout';
import { CommonText, Title } from '../components/text';
import SettingsLine from '../components/settingsLine';

const Settings = () => {

  return (
    <ScrollView>
      <Title>Settings</Title>
      <SettingsLine title="Thème sombre" />
      <SettingsLine title="Notifications push" />
    </ScrollView>
  )
}

Settings.propTypes = {}

export default Settings