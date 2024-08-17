import React, {useCallback} from 'react';
import {ItemSeparator, List} from './ProductList.styles.ts';
import {useGetProductList} from './ProductList.hooks.ts';
import {ProductCard, ProductListHeader} from '@components';

const ProductList = () => {
  const {data, handleNextPage, setSearch, setSort} = useGetProductList();

  const listItemSeparatorComponent = useCallback(() => <ItemSeparator />, []);

  if (!data) {
    return null;
  }

  return (
    <List
      testID={'product-list'}
      data={data.products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ProductCard product={item} />}
      ItemSeparatorComponent={listItemSeparatorComponent}
      onEndReached={handleNextPage}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={<ProductListHeader onChangeText={setSearch} onSortChange={setSort} />}
    />
  );
};

export default ProductList;
