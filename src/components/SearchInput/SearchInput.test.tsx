import React from 'react';
import {renderWithProviders} from '@utils';
import {SearchInput} from '@components';

describe('<SearchInput />', () => {
  it('should render correctly', () => {
    const {getByTestId} = renderWithProviders(<SearchInput />);

    expect(getByTestId('search-input-container')).toBeDefined();
  });
});
