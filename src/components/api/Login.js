import { BaseApi } from "../BaseApi";

export const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ body }) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    SignupPage: builder.mutation({
      query: ({ body }) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupPageMutation } = authApi;
