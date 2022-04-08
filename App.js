import React, { useEffect, useState } from 'react'
import Routes from './src/config/routes'
import { ThemeProvider } from 'styled-components'
import { store } from './src/config/store'

import { Provider } from 'react-redux'

import { lightTheme, darkTheme } from './src/config/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <Routes></Routes>
        </ThemeProvider>
        </PersistGate>
    </Provider>
  )
}


export default App