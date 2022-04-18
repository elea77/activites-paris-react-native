import React from 'react';
import { ScrollView } from '../components/layout'
import { Title } from '../components/text'
import SettingsLine from '../components/settingsLine'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { t } = useTranslation()

  return (
    <ScrollView>
      <Title>{ t('page.settings') }</Title>
      <SettingsLine title={`${t('settings.language')} (En / Fr)`} settingType="language"/>
      <SettingsLine title={ t('settings.theme') } settingType="theme"/>
    </ScrollView>
  )
}

Settings.propTypes = {}

export default Settings