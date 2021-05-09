import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);



// // For Testing Purposes Only:

// import SupportUs from "./containers/SupportUs";

// ReactDOM.render(
//   <React.StrictMode>
//       <SupportUs />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// import HeroCard from "./components/HeroCard";

// ReactDOM.render(
//   <React.StrictMode>
//       <HeroCard />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

reportWebVitals();
