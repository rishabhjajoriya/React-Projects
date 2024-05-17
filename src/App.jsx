import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian/accordian";
import Accordian2 from './components/Accordian-2/Accordian'
import RandomColor from "./components/random-color";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import LoadMore from "./components/load-more-button";
import TreeView from "./components/treeView";
import menus from "./components/treeView/data";
import SearchAutocomplete from "./components/searchAutocomplete";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scrollIndicator";
import TabTest from "./components/custom-tabs/tab-test";
import data from './components/Accordian-2/data'
import Autocomplete from "./components/autoCompleteTypeHead/AutoComplete";
import TicTacToe from "./components/TicTacToe/TicTacToe";
// Correct casing for uppercase Test.jsx

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ImageSlider url = {'https://picsum.photos/v2/list'} limit={'10'}/> */}
      {/* <StarRating noofstars={10} /> */}
      {/* <RandomColor/> */}
      {/* <QRCodeGenerator /> */}
      {/* <ScrollIndicator url='https://dummyjson.com/products?limit=100' /> */}
      {/* <TabTest/> */}
{/*       
      {data && data.map((dataitem) =>{
       return <Accordian2 dataitem = {dataitem}/>
      })} */}
     {/* <Autocomplete/> */}
     <TicTacToe/>
    </>
  );
}

export default App;
