import { baseApi } from "@/redux/baseApi";

export const aboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/about",
      }),
      providesTags: ["about"],
    }),
    updateAbout: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/about/update-about/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["about"],
    }),
    createAbout: builder.mutation({
      query: (formData) => ({
        url: `/about/add-about`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["about"],
    }),
  }),
});

export const {
  useGetAboutQuery,
  useUpdateAboutMutation,
  useCreateAboutMutation,
} = aboutApi;
