import React from 'react';
import {ProductList} from '@components';
import {renderWithProviders} from '@utils';

const mockData = {
  products: [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
  ],
};

describe('<ProductList />', () => {
  const mockOnSortChange = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('should render the product list when data is available', () => {
    jest
      .spyOn(require('./ProductList.hooks.ts'), 'useGetProductList')
      .mockReturnValue({
        data: mockData,
        handleNextPage: jest.fn(),
        setSearch: jest.fn(),
        setSort: mockOnSortChange,
      });

    const {getByTestId} = renderWithProviders(<ProductList />);
    expect(getByTestId('product-list')).toBeTruthy();
  });

  it('should not render the product list when data is not available', () => {
    jest
      .spyOn(require('./ProductList.hooks.ts'), 'useGetProductList')
      .mockReturnValue({
        data: null,
        handleNextPage: jest.fn(),
        setSearch: jest.fn(),
        setSort: mockOnSortChange,
      });

    const {queryByTestId} = renderWithProviders(<ProductList />);
    expect(queryByTestId('product-list')).toBeNull();
  });
});
