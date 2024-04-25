import React from "react";
import "./App.css"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from 'react-cookie'

export default function Details() {
  const count = useSelector((state) => state.counter.value)
  const  [cookie] = useCookies([count])
  let { state } = useLocation();
  let movie = state
  return <div className='div-style' >
      <h1>count details : {cookie.count}</h1>
      <h1>{movie.title}</h1>
      <h2>{movie.year}</h2>
      {movie.runtime}
      {movie.genres}
      {movie.director}
      {movie.actors}
      <div> <p>{movie.plot}</p></div>
      <img src={movie.posterUrl} alt="" />
  </div>

}