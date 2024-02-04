import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Key': '79f72541e4mshdb389d7290e7790p12c68djsn1a9c1c3c7006',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
  
const baseUrl ='https://coinranking1.p.rapidapi.com/'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:() => createRequest('/coins')
        })
    })
})



export const {
    useGetCryptosQuery,
}=cryptoApi;