import React from 'react';

import './assets/scss/app.scss';
import Header from './components/Header';
import RouterView from './components/RouterView';
import DataProvider from './components/hooks/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <RouterView />
    </DataProvider>
  );
};

export default App;
