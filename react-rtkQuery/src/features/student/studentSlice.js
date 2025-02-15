import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67abb1635853dfff53d841ea.mockapi.io/api",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/student/studentData",
    }),
  }),
});

export const {useGetStudentsQuery} = studentApi;