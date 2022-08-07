import React from 'react';
import {InfoProvider} from './src/context/AuthContext';
import Router from './src/routes/Router';
import FilmsDetails from './src/screens/FilmsDetails';

const App = () => {
  return (
    <InfoProvider>
      <Router />
    </InfoProvider>
  );
};

export default App;
