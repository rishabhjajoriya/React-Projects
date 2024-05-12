import { useState } from "react";
import React from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enalbleMultipleSelection, setenalbleMultipleSelection] =
    useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleMultipleSelection(getCurrentId) {
    let cpyMulitple = [...multiple];
    const findIndexOfCurrentId = cpyMulitple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMulitple.push(getCurrentId);
    } else {
      cpyMulitple.splice(findIndexOfCurrentId, 1);
    }
    setmultiple(cpyMulitple);
  }
  console.log(multiple);

  function handleSingleSelection(getCurrentId) {
    setselected(selected === getCurrentId ? null : getCurrentId);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <button
        onClick={() => setenalbleMultipleSelection(!enalbleMultipleSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enalbleMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <div>{dataItem.question}</div>
                <span>+</span>
              </div>



              {enalbleMultipleSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}

              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
 
  
  );
};

export default Accordian;
