import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.openweathermap.org/data",
  }),
  endpoints: (builder) => ({
    getweathers: builder.query({
      query: () => "/2.5/weather?q=pune&units=metric&appid=99dfa9cce95531d5becd415291e48eef",
    }),
  }),
});

export const {useGetWeathersQuery} = weatherApi;