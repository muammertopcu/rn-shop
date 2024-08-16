import React from 'react';
import {render} from '@testing-library/react-native';
import ReduxProvider from '../store/ReduxProvider.tsx';

export const renderWithProviders = (children: JSX.Element) => {
  return render(<ReduxProvider>{children}</ReduxProvider>);
};
