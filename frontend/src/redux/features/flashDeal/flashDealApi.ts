import { baseApi } from "@/redux/baseApi";

export const flashDealApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFlashDeal: builder.mutation({
      query: (flashDealInfo) => ({
        url: `/flash-deal/add-flashDeal`,
        method: "POST",
        body: flashDealInfo,
      }),
      invalidatesTags: ["flashDeal"],
    }),

    getFlashDeal: builder.query({
      query: () => ({
        url: "/flash-deal/all",
      }),
      providesTags: ["flashDeal"],
    }),

    getActiveFlashDeal: builder.query({
      query: () => ({
        url: "/flash-deal/active",
      }),
      providesTags: ["flashDeal"],
    }),

    getFlashDealById: builder.query({
      query: (id) => ({
        url: `/flash-deal/${id}`,
      }),
      providesTags: ["flashDeal"],
    }),

    toggleFlashDealStatus: builder.mutation({
      query: (id) => ({
        url: `/flash-deal/update-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["flashDeal"],
    }),

    updateFlashDeal: builder.mutation({
      query: ({ id, data }) => ({
        url: `/flash-deal/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["flashDeal"],
    }),

    deleteFlashDeal: builder.mutation({
      query: (id) => ({
        url: `/flash-deal/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["flashDeal"],
    }),
  }),
});

export const {
  useAddFlashDealMutation,
  useGetFlashDealQuery,
  useGetActiveFlashDealQuery,
  useToggleFlashDealStatusMutation,
  useDeleteFlashDealMutation,
  useGetFlashDealByIdQuery,
  useUpdateFlashDealMutation,
} = flashDealApi;
