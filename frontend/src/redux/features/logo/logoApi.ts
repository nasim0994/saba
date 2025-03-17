import { baseApi } from "@/redux/baseApi";

export const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMainLogo: builder.query({
      query: () => ({
        url: "/logo",
      }),
      providesTags: ["logo"],
    }),
    updateMainLogo: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/logo/update-logo/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
    addLogo: builder.mutation({
      query: (formData) => ({
        url: "/logo/add-logo",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const {
  useGetMainLogoQuery,
  useUpdateMainLogoMutation,
  useAddLogoMutation,
} = logoApi;
