import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import UserContext from "../context/usercontext.js";
import Header from "./header.js";
import Counter from "./counter.js";
import ReactGA from 'react-ga4';


const App = () => {
  ReactGA.initialize('G-M07MCPQ4FY');

  const [data, setData] = useState([])
  const [userInfo, setUserInfo] = useState()

 const homeUrl = process.env.REACT_APP_BASE_URL + '/home'
 const userInfoURL = process.env.REACT_APP_BASE_URL + '/user-info'
 

  

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'tap_open_details'
    });
  };


  useEffect(() => {
    const fetchMovieList = () => {
      fetch(homeUrl)
      .then((res) => res.json())
      .then((d) => {
        setData(d["movies"])  
        // setUsers(d["users"])
      })
      .catch((error) => Sentry.captureException(error));
    }
    const fetchUserInfo = () => {
      fetch(userInfoURL)
      .then((res) => res.json())
      .then((d) => {
        setUserInfo(d)  
        console.log(userInfo)
      })
      .catch((error) => Sentry.captureException(error));
    }

    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    handleButtonClick();
    fetchMovieList();
    fetchUserInfo();
  }, [])

  return (
    <div>
      <Counter></Counter>
      <UserContext.Provider value={{userInfo}}>
        <Header />
      </UserContext.Provider>
      {data.map((dataObj, index) => {
          return (
            // <ThemeContext.Provider value={{theme, setTheme}}>
              <div key={index}>
            
               <Link to="/details" state={dataObj} >
                
                <button>{dataObj.title}</button>
                
                </Link>
              {/* {console.log(dataObj)} */}
              {/* // </ThemeContext.Provider> */}
              </div>
            );
          
        })}
    </div>
  );
};

export default App;