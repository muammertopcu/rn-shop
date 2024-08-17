import {useLazyGetProductQuery} from '@services';
import {useLayoutEffect, useState} from 'react';

export const useGetProductList = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({sortBy: '', order: ''});

  const [getProductList, {data, isFetching, isLoading, isError}] = useLazyGetProductQuery();

  useLayoutEffect(() => {
    getProductList({limit: 20, q: search, ...sort});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  const handleNextPage = () => {
    if (!isFetching && data && data.total > data?.products.length) {
      getProductList({limit: 20, skip: data?.products.length, q: search, ...sort});
    }
  };

  return {data, isLoading, isError, isFetching, handleNextPage, setSearch, setSort};
};
