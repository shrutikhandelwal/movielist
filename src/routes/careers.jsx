import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Careers() {
  const careers = useLoaderData()
  return (
    <div>
      <h1>Carrers</h1>
      {careers.map((career) => {
        return <>{career.title}</>
      } )}
      

    </div>
  )
}

export const careerLoader = async () =>{
  const res = await fetch("http://127.0.0.1:5000/home")
  return res.json()
}