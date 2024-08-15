import React from 'react';
import {render} from '@testing-library/react-native';
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
});
