import React from 'react';
import {renderWithProviders} from '@utils';
import {ProductListHeader} from '@components';
import {fireEvent} from '@testing-library/react-native';

describe('<ProductListHeader />', () => {
  it('should render a ProductListHeader component', () => {
    const mockOnChangeText = jest.fn();
    const mockOnSortChange = jest.fn();

    const {getByTestId} = renderWithProviders(
      <ProductListHeader onChangeText={mockOnChangeText} onSortChange={mockOnSortChange} />,
    );

    const container = getByTestId('product-list-header-container');
    const searchInput = getByTestId('search-input');

    expect(searchInput).toBeDefined();
    expect(container).toBeDefined();

    fireEvent(searchInput, 'onChangeText', 'test');

    expect(mockOnChangeText).toHaveBeenCalledTimes(1);
    expect(mockOnChangeText).toHaveBeenCalledWith('test');
  });
});
