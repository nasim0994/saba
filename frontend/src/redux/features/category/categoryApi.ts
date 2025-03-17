import { baseApi } from "@/redux/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category/all",
      }),
      providesTags: ["category"],
    }),

    getCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
      }),
    }),

    addCategory: builder.mutation({
      query: (formData) => ({
        url: `/category/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/category/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
