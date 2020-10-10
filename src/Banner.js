
import React, { useState,useEffect } from 'react'
import axios from './axios'
import requests from './requests';
import './Banner.css'
const base_url="https://image.tmdb.org/t/p/original/";


function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{

        async function fetchdata(){
            const request=await axios.get(requests.fetchoriginals);
           // console.log(request);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchdata();
    },[]);
    console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
      }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
            backgroundPosition:"center center",

        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <br></br>
                <p className="banner_description">{truncate(movie?.overview,150)}</p>
             </div> 
             <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
