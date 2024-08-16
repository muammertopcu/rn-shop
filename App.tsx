import React from 'react';
import {Router} from '@router';
import ReduxProvider from './src/store/ReduxProvider.tsx';

function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
