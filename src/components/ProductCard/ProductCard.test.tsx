import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ProductCard from './ProductCard.tsx';

import product from '__mocks__/product.json';

describe('<ProductCard />', () => {
  it('should render correctly', () => {
    const {getByTestId, toJSON} = render(<ProductCard product={product} />);

    expect(getByTestId('product-card-container')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the product info', () => {
    const {getByText} = render(<ProductCard product={product} />);

    expect(getByText(product.title)).toBeTruthy();
    expect(getByText(product.category)).toBeTruthy();
    expect(getByText(`$${product.price}`)).toBeTruthy();
  });

  it('should navigate to the product detail screen', () => {
    const mockNavigate = jest.fn();

    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({navigate: mockNavigate});

    const {getByTestId} = render(<ProductCard product={product} />);

    fireEvent(getByTestId('product-card-container'), 'onPress');

    expect(mockNavigate).toHaveBeenCalledWith('ProductDetail', {productId: product.id.toString()});
  });
});
