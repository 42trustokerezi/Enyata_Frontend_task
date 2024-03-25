import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
    endpoints: (builder)=> ({
        getStarships: builder.query({
            query: () => '/starships'
        }),
        getFilms: builder.query({
            query: () => '/films'
        }),
        getPeople: builder.query({
            query: () => '/people'
        }),
        getSpecies: builder.query({
            query: () => '/species'
        }),
        
        
    })
})

export const {
    useGetStarshipsQuery, useGetFilmsQuery, useGetPeopleQuery, useGetSpeciesQuery
} = apiSlice