import { useState } from "react";
import React from "react";
import MenuList from "./menu-list";
import {FaMinus,FaPlus} from 'react-icons/fa'

const MenuItem = ({ item }) => {
  const [displayCurrentItem, setdisplayCurrentItem] = useState({});

  function handleToggle(getcurrentlabel) {
    setdisplayCurrentItem({
      ...displayCurrentItem,
      [getcurrentlabel]: !displayCurrentItem[getcurrentlabel],
    });
  }
  console.log(displayCurrentItem);
  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentItem[item.label] ? <FaPlus color ='white' /> : <FaMinus color ='white' /> }
          </span>
        ) : null}
      </div>
      
      {
        <div>
          {item &&
          item.children &&
          item.children.length &&
          displayCurrentItem[item.label] > 0 ? (
            <MenuList list={item.children} />
          ) : null}
        </div>
      }
    </li>
  );
};

export default MenuItem;
