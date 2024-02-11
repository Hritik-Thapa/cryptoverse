import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '79f72541e4mshdb389d7290e7790p12c68djsn1a9c1c3c7006',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

  const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSeacrch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
  });

  export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi