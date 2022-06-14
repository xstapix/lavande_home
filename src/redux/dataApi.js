import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  reducerPath: 'dataApi',
  tagTypes:['Rules'],
  baseQuery: fetchBaseQuery({baseUrl: 'localhost'}),
  endpoints: (build) => ({
    getTexts: build.query({
      query: () => 'texts',
    }),
    getRooms: build.query({
      query: (id) => (id ? `rooms/${id}` : 'rooms'),
    }),
    getContacts: build.query({
      query: () => 'contacts',
    }),
    getRules: build.query({
      query: () => 'bookingRules',
      providesTags: (result) => result
        ? [
          ...result.map(({id}) => ({ type: 'Rules', id})),
          {type: 'Rules', id: 'LIST'},
          ] : [{type: 'Rules', id: 'LIST'}],
    }),
    addRules: build.mutation({
      query: (body) => ({
        url: 'bookingRules',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Rules', id: 'LIST'}]
    }),
    deleteRules: build.mutation({
      query: (id) => ({
        url: `bookingRules/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Rules', id: 'LIST'}]
    }),
    getReviews: build.query({
      query: () => 'reviews',
    }),
  })
})

export const {
  useGetTextsQuery, useGetRoomsQuery, 
  useGetContactsQuery, useGetRulesQuery, 
  useGetReviewsQuery, useAddRulesMutation,
  useDeleteRulesMutation} = dataApi