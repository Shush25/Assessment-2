import React from 'react';
import HomePage from './homepage/homepage.components';
import Header from './components/header/header.component';
import Lefter from './components/lefter/lefter.component';
import { FetchContextProvider } from './service/fetchdata/fetchdata.context';

function App() {
  return (
    <div className="App">
      <Lefter />
      <Header />
      <FetchContextProvider>
      <HomePage />
      </FetchContextProvider>
    </div>
  );
}

export default App;
