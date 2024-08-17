import React from 'react';
import {SearchInput} from '../SearchInput';
import {Container, FilterButton, FilterIcon} from './ProductListHeader.styles.ts';

const ProductListHeader = ({onChangeText}: {onChangeText: (text: string) => void}) => {
  return (
    <Container testID={'product-list-header-container'}>
      <SearchInput onChangeText={onChangeText} />

      <FilterButton>
        <FilterIcon name={'filter'} />
      </FilterButton>
    </Container>
  );
};

export default ProductListHeader;
