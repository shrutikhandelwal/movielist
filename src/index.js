import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Details from './routes/details';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/details" element={<Details />}/>
      </Routes>    
    
  </BrowserRouter>
);