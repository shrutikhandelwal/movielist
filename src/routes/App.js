import React, { useState, useEffect } from "react";
import Details from "./details";

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
    <div className="App">
      {data.map((dataObj, index) => {
          return (
            <div>
              <Details movie={dataObj} />
              {console.log(dataObj)}
            </div>
          );
        })}
    </div>
  );
};

export default App;