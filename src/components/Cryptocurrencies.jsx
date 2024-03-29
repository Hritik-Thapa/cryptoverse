import React, {useState, useEffect} from 'react'
import millify from 'millify';
import {Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';

function CryptoCurrencies({simplified}) {

  const count = simplified ? 10:100;
  console.log(simplified,count);

  const {data:cryptoList,isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  useEffect(()=>{
    setCryptos(cryptoList?.data?.coins);

    const filteredData=cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  },[cryptoList,searchTerm])

  
  if (isFetching) return 'Loading...'
  // console.log(cryptos);

  return (
    <>
      {!simplified &&(
        <div className='search-crpyto'>
          <Input placeholder="Search crypto" onChange={e=>setSearchTerm(e.target.value)}/>
        </div>
      )}
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`} 
                    extra={<img className='crypto-image' src={currency.iconUrl}></img>}
                    hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.dailyChange)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoCurrencies;