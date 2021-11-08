import React from 'react'

import './assets/scss/app.scss'
import Header from './components/Header'
import RouterView from './components/RouterView'
import MainAdvance from './components/MainAdvance'
import DataProvider from './components/hooks/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <MainAdvance />
      <RouterView />
    </DataProvider>
  )
}

export default App
