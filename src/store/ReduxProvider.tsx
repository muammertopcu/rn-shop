import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import store from './index.ts';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const persistor = persistStore(store);

const ReduxProvider = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
