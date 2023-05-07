import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <div>
       <Main />
       <Row rId='1' title="Upcoming" Url={requests.requestUpcoming}/>
       <Row rId='2' title="Popular" Url={requests.requestPopular}/>
       <Row rId='3' title="Trending" Url={requests.requestTrending}/>
       <Row rId='4' title="Top-Rated" Url={requests.requestTopRated}/>    
       <Row rId='5' title="Anime" Url={requests.requestAnime}/>    
    </div>
  )
}

export default Home
