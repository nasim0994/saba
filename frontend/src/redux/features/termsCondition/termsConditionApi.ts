import { baseApi } from "@/redux/baseApi";

export const termsConditionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTermsCondition: builder.query({
      query: () => ({
        url: "/terms-condition",
        method: "GET",
      }),
      providesTags: ["termsCondition"],
    }),

    addTermsCondition: builder.mutation({
      query: (data) => ({
        url: "/terms-condition/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["termsCondition"],
    }),

    updateTermsCondition: builder.mutation({
      query: ({ id, data }) => ({
        url: `/terms-condition/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["termsCondition"],
    }),
  }),
});

export const {
  useGetTermsConditionQuery,
  useAddTermsConditionMutation,
  useUpdateTermsConditionMutation,
} = termsConditionApi;
