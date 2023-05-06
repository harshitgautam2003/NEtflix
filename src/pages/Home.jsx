import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <div>
       <Main />
       <Row title="Upcoming" Url={requests.requestUpcoming}/>
       <Row title="Popular" Url={requests.requestPopular}/>
       <Row title="Trending" Url={requests.requestTrending}/>
       <Row title="Top-Rated" Url={requests.requestTopRated}/>    
       <Row title="Anime" Url={requests.requestAnime}/>    
    </div>
  )
}

export default Home
