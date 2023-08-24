import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: () => ({}),
});
