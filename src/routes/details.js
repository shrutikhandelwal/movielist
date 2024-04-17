import React from "react";
import "./App.css"
import { useLocation } from "react-router-dom";
// import ThemeName from "./themename.js";
import { UseSelecto, useDispatchr, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";



export default function Details() {
  const count = useSelector((state) => state.counter.value)

  let { state } = useLocation();
  let movie = state
  return <div className='div-style' >
      <h1>count details : {count}</h1>
      {/* <ThemeName /> */}
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