import React from 'react'
import "./Homescreen.css"
import Nav from '../subcomponents/nav/Nav'
import Banner from "../subcomponents/banner/Banner"
import Rows from '../subcomponents/rows/Rows'
import requests from '../../requests'

const Homescreen = () => {
  return (
    <div>
      {/* nav */}
      <Nav />
     
      {/* banner */}
      <Banner />

      {/* rows */}
      <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
      <Rows title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Rows title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  )
}

export default Homescreen;
