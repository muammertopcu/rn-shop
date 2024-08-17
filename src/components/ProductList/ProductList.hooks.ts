import {useLazyGetProductQuery} from '@services';
import {useLayoutEffect, useState} from 'react';

export const useGetProductList = () => {
  const [search, setSearch] = useState('');

  const [getProductList, {data, isFetching, isLoading, isError}] = useLazyGetProductQuery();

  useLayoutEffect(() => {
    getProductList({limit: 20, search});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleNextPage = () => {
    if (!isFetching && data && data.total > data?.products.length) {
      getProductList({limit: 20, skip: data?.products.length, search});
    }
  };

  return {data, isLoading, isError, isFetching, handleNextPage, setSearch};
};
