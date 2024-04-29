import React, { useState, useEffect, useCallback } from "react";
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
  const fetchMovieList = useCallback(() => {
    fetch(homeUrl)
    .then((res) => res.json())
    .then((d) => {
      setData(d["movies"])  
      // setUsers(d["users"])
    })
    .catch((error) => Sentry.captureException(error));
  }, [homeUrl])

  const fetchUserInfo = useCallback(() => {
    fetch(userInfoURL)
    .then((res) => res.json())
    .then((d) => {
      setUserInfo(d)  
    })
    .catch((error) => Sentry.captureException(error));
  }, [userInfoURL])

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'tap_open_details'
    });
  };


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    handleButtonClick();
    fetchMovieList();
    fetchUserInfo();
  }, [fetchMovieList, fetchUserInfo])

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
                <h1>WTF!!!!</h1>
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