import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // For Testing Purposes Only:

import ExpandContent from "./components/ExpandContent";

ReactDOM.render(
  <React.StrictMode>
      <ExpandContent />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
