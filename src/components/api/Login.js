import { BaseApi } from "../BaseApi";

export const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ body }) => ({
        url: "users/login ",
        method: "POST",
        body,
      }),
    }),
    signupPage: builder.mutation({
      query: ({ body }) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
    forgotPage: builder.mutation({
      query: ({ body }) => ({
        url: "users/send-otp ",
        method: "POST",
        body,
      }),
    }),
    resetPasswordPage: builder.mutation({
      query: ({ body }) => ({
        url: "users/reset-password ",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupPageMutation,
  useForgotPageMutation,
  useResetPasswordPageMutation,
} = authApi;
