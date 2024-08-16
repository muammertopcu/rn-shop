import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: () => ({}),
  tagTypes: ['Product'],
});

export default apiSlice;
