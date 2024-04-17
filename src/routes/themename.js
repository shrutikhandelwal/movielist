import React,{useContext} from 'react'
import ThemeContext from "../context/contextapi"

function ThemeName() {
  const theme = useContext(ThemeContext)
  
  return (
    
    <div>
  
      <h1>ThemeName= {theme} </h1> </div>
   
  )
}

export default ThemeName