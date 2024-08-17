import React from 'react';
import {renderWithProviders} from '@utils';
import Icon from './Icon.tsx';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const {getByTestId} = renderWithProviders(<Icon name={'bag'} />);

    expect(getByTestId('icon')).toBeTruthy();
  });
});
