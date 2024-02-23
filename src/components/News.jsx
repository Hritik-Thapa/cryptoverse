import React,{useState,useEffect} from 'react'
import { Select, Typography, Row, Col, Avatar, Card, Spin, Input } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select


function News() {

  // const [search,setSearch]=useState("");
  // const [cryptoNews,setCryptoNews]=useState('');
  // const { data: cryptoNewsData, isFetching } = useGetCryptoNewsQuery()

  // // useEffect(()=>{
  // //   setCryptoNews(cryptoNewsData.news)
    
  // //   let filteredData=cryptoNews.filter(news=>news.Title.toLowerCase().includes(search.toLowerCase()))

  // //   setCryptoNews(filteredData);
  // // },[cryptoNewsData,search])

  // if (isFetching) return <Spin className='loader' />
  // setCryptoNews(cryptoNewsData)

  // console.log(cryptoNews);

  // return (
  //   <div>
  //     {<Input onChange={e=> setSearch(e.target.value)} placeholder="Search" style={{width:"30%"}}/>}

      
  //     {cryptoNews.news.map((news,i)=>(
  //       // console.log(news);
  //       <div>
  //         <div className='cards'>
  //           <Card hoverable style={{width:'300px'}} cover={<img src={news.Image} />}>
  //             <Title  level={5} className='news-title'>{news.Title}</Title>
  //           </Card>
  //         </div>
  //       </div>
  //     ))
  //     }
      
  //   </div>
  // )
}

export default News;