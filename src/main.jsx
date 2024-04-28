import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Accordian from "./components/accordian/accordian.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/starRating/index.jsx";
import ImageSlider from "./components/imageSlider/index.jsx";
import LoadMore from "./components/load-more-button";
import TreeView from "./components/treeView/index.jsx";
import menus from "./components/treeView/data.js";
import SearchAutocomplete from "./components/searchAutocomplete/index.jsx";
import QRCodeGenerator from "./components/qr-code-generator/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />  
 </React.StrictMode>
);

