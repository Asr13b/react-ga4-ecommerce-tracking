import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-WHN6HLXWDQ", {
  debug: true, // VERY IMPORTANT FOR DEBUGVIEW
  
});

console.log("GA4 Initialized with ID: G-NHW6HLXWDQ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
