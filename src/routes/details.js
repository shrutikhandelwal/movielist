import React from "react";
import "./App.css"
import { useLocation } from "react-router-dom";

export default function Details() {

  let { state } = useLocation();
  let movie = state
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