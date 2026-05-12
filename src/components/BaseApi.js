import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { localUrl1 } from 'api/envUrl';

export const BaseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8045/",
    prepareHeaders: (headers, { getState }) => {
      // const token = getState()?.user?.data?.accessToken;

      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      // }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
