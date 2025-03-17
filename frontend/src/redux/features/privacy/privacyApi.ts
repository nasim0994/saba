import { baseApi } from "@/redux/baseApi";

export const privacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacy: builder.query({
      query: () => ({
        url: "/privacy",
        method: "GET",
      }),
      providesTags: ["privacy"],
    }),

    addPrivacy: builder.mutation({
      query: (data) => ({
        url: "/privacy/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["privacy"],
    }),

    updatePrivacy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/privacy/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["privacy"],
    }),
  }),
});

export const {
  useGetPrivacyQuery,
  useAddPrivacyMutation,
  useUpdatePrivacyMutation,
} = privacyApi;
