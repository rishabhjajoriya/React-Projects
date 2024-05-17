import React from "react";
import data from "./data";
import "./Accordian.css";
import { useState } from "react";
const Accordian = ({ dataitem }) => {
  const [show, setshow] = useState(false);

  function toggle() {
    setshow(!show);
  }

  return (
    <div>
      <div
        className="container"
        style={{
          height: "100px",
          width: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "10px",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        {dataitem.id}
        <div
          className="question"
          onClick={() => toggle()}
          style={{
            height: "25px",
            width: "700px",
            backgroundColor: "lightgreen",
            paddingTop: "10px",
            borderRadius: "10px",
          }}
        >
          {dataitem.question}
        </div>
        <div
          className="solution"
          style={{ backgroundColor: "skyblue", borderRadius: "10px" }}
        >
          {show && dataitem.answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
