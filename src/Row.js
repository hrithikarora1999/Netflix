import React, { useState,useEffect,useRef } from 'react'
import axios from "./axios";
import "./row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer";
//import requests from './requests';



const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(() => {
        async function fetchdata() {
            const request=await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl)
        {
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "").then(url=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                console.log(url);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }
    const scrollTo = (ref) => {
        if (ref && trailerUrl) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

    return (
        <div className="row">
            <h2 className="Catogary">{title}</h2>
            <div className="row_posters">
              {movies.map(movie=>(
                  <img 
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                  src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.title}/>
              ))}
            </div>
            <div ref={scrollTo}>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row
