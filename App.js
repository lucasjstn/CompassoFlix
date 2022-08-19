import React from 'react';
import {InfoProvider} from './src/context/AuthContext';
import Router from './src/routes/Router';

const App = () => {
  return (
    <InfoProvider>
      <Router />
    </InfoProvider>
  );
};

export default App;
