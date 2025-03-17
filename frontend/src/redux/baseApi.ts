import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { userLoggedIn, userLogout } from "./features/user/authSlice";
const url = import.meta.env.VITE_BACKEND_URL + "/api";

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch(`${url}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.loggedUser;

      api.dispatch(
        userLoggedIn({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userLogout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [
    "about",
    "user",
    "admin",
    "order",
    "banner",
    "brand",
    "businessInfo",
    "campaignBanner",
    "category",
    "sub_category",
    "sub_subCategory",
    "seo",
    "color",
    "contact",
    "coupon",
    "faq",
    "favicon",
    "flashDeal",
    "logo",
    "product",
    "review",
    "privacy",
    "returnPolicy",
    "termsCondition",
    "topHeader",
    "shippingConfig",
    "topCampaignBanner",
  ],
});
