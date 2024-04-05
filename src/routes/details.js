import React from "react";
import "./App.css"
export default function Details({movie}) {

  return <div className='div-style' >
      <h1>{movie.title}</h1>
      <h2>{movie.year}</h2>
      {movie.runtime}
      {movie.genres}
      {movie.director}
      {movie.actors}
      <div> <p>{movie.plot}</p></div>
      <img src={movie.posterUrl} />
  </div>

}