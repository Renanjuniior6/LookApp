/* eslint-disable prettier/prettier */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Routes from './src/routes/routes';
import ContextProvider from './src/contexts/app';

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
