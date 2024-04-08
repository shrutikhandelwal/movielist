import React, { useState, useEffect } from "react";
import Details from "./details";
import { Link, Routes } from 'react-router-dom';


const App = () => {
  const [data, setData] = useState([])


  const fetchApp = () => {
    fetch("http://127.0.0.1:5000/home")
    .then((res) => res.json())
    .then((d) => {
      setData(d["movies"])  
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchApp();
  }, [])

  return (
    <div>
      {data.map((dataObj, index) => {
          return (
            <div>
            
               <Link to="/details" state={dataObj} >
                <button>{dataObj.title}</button>
                </Link>
              {/* {console.log(dataObj)} */}
            </div>
            
            );
          
        })}
    </div>
  );
};

export default App;