import {useLazyGetProductQuery} from '@services';
import {useLayoutEffect} from 'react';

export const useGetProductList = () => {
  const [getProductList, {data, isFetching, isLoading, isError}] = useLazyGetProductQuery();

  useLayoutEffect(() => {
    getProductList({limit: 20});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPage = () => {
    if (!isFetching && data && data.total > data?.products.length) {
      getProductList({limit: 20, skip: data?.products.length});
    }
  };

  return {data, isLoading, isError, isFetching, handleNextPage};
};
