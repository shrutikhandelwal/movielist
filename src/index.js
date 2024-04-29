

import React from 'react';
import App from './routes/App';
import Details from './routes/details';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import store from './store/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
const root = createRoot(document.getElementById("root"));

Sentry.init({
  dsn: "https://1e896e9f3dee466667457dbd16f27270@o4507052252004352.ingest.us.sentry.io/4507052253511680",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  environment: process.env.REACT_APP_ENV,
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^http:\/\/localhost:3002/],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

root.render(
   
  <CookiesProvider>
  <Provider store={store}>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/details" element={<Details />}/>
      </Routes>    
  </BrowserRouter>
  </Provider>
  </CookiesProvider>
 
);