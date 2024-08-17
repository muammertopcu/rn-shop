import api from './api.ts';
import type {
  PaginationParams,
  PaginationResponse,
  Product,
  ProductResponse,
  ProductSearchParams,
} from '@types';

const productApiSlice = api.injectEndpoints({
  endpoints: build => ({
    getProduct: build.query<
      PaginationResponse<ProductResponse>,
      PaginationParams<ProductSearchParams>
    >({
      query: params => ({url: 'products/search', params}),
      providesTags: result =>
        result
          ? [
              ...result.products.map(({id}) => ({type: 'Product' as const, id})),
              {type: 'Product', id: 'LIST'},
            ]
          : [{type: 'Product', id: 'LIST'}],
      serializeQueryArgs: ({queryArgs}) => {
        const newQueryArgs = {...queryArgs};

        if (typeof newQueryArgs.skip === 'number') {
          delete newQueryArgs.skip;
        }

        return newQueryArgs;
      },
      merge: (currentCacheData, responseData) => {
        if (!currentCacheData) {
          return responseData;
        }

        const uniqueProducts = responseData.products.filter(
          product => !currentCacheData.products.some(({id}) => id === product.id),
        );

        return {
          ...responseData,
          products: [...currentCacheData.products, ...uniqueProducts],
        };
      },
    }),
    getProductDetail: build.query<Product, string>({
      query: id => ({url: `products/${id}`}),
      providesTags: (_result, _error, id) => [{type: 'Product', id}],
    }),
  }),
  overrideExisting: true,
});

export const {useLazyGetProductQuery, useGetProductDetailQuery} = productApiSlice;
