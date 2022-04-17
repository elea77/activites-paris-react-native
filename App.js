import React, { useEffect, useState } from 'react'
import Routes from './src/config/routes'

import { store } from './src/config/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
import './src/config/initTranslation'

let persistor = persistStore(store);

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Routes></Routes>
        </PersistGate>
    </Provider>
  )
}


export default App