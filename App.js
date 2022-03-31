import React from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './src/config/theme'
import Routes from './src/config/routes'


const App = () => {

  return (
    <ThemeProvider theme={lightTheme} >
      <Routes />
    </ThemeProvider>
  )
}


export default App