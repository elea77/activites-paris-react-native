import React, { useEffect, useState } from 'react'
import Routes from './src/config/routes'
import { ThemeProvider } from 'styled-components'
import { store } from './src/config/store'

import { Provider } from 'react-redux'

import { lightTheme, darkTheme } from './src/config/theme'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  return (
    <Provider store={store}>
    {/* <PersistGate loading={null}> */}
      <ThemeProvider theme={lightTheme}>
        <Routes></Routes>
      </ThemeProvider>
    {/* </PersistGate> */}
  </Provider>
  )
}


export default App