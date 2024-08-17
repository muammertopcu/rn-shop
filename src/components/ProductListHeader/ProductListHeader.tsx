import React from 'react';
import {SearchInput, ProductFilter, type SortParams} from '@components';
import {Container} from './ProductListHeader.styles.ts';

interface ProductListHeaderProps {
  onChangeText: (text: string) => void;
  onSortChange: (sort: SortParams) => void;
}

const ProductListHeader = ({onChangeText, onSortChange}: ProductListHeaderProps) => {
  return (
    <Container testID={'product-list-header-container'}>
      <SearchInput onChangeText={onChangeText} />

      <ProductFilter onSortChange={onSortChange} />
    </Container>
  );
};

export default ProductListHeader;
