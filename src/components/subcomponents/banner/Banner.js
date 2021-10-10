import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from '../../../requests'



const Banner = () => {

  const [movie,setmovie]=useState([])


  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setmovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
        );
        // console.log(requests.data.results)
        return request
    }
    fetchData();
    },[])

  //  console.log(requests.fetchDocumentaries)
  
  function turncate(string, n) {
      return string.length > n ? string.substr(0, n -1) + '....' : string
      
    }
  


  return (
    <header className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      
        <div className="banner__contents">
        <h1 className="banner__title"> { movie?.title || movie?.name || movie?.original_name}</h1>
            <div class="banner__buttons">
              <button className="banner__btn">Play</button>
              <button className="banner__btn">My List</button>
            </div>
            <h2 className="banner__description">{turncate(`${movie.overview}`,150)} </h2>
        </div>
        <div className="banner--fadebottom"></div>
    </header>
  )
}

export default Banner;
