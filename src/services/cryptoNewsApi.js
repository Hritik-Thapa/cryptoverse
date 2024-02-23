import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders ={
    'X-RapidAPI-Key': '79f72541e4mshdb389d7290e7790p12c68djsn1a9c1c3c7006',
    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
  }

  const baseUrl='https://news67.p.rapidapi.com';

  const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:()=> createRequest(`/v2/crypto/`),
        })
    })
  });

  export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi