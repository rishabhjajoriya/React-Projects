import React, { useState,useEffect } from 'react'

const data = ["hey","ro","rishabh","jajoriya","code","varsha","kashvi"]


const AutoComplete = () => {
    const [filteredData, setfilteredData] = useState(data);
    const [value, setvalue] = useState("")
    const [show,setshow] = useState(false)

function handleClick(value){
    setvalue(value)
    const searchedResponses = data.filter((e) => {
        return e.toLowerCase().startsWith(value.toLowerCase())    //can do includes to find a substring value in e
    })
    setfilteredData(searchedResponses);
}

function setClick(item){
    setvalue(item);
    setshow(false);
}

  return (
    <div>
     <input type="text"  value = {value} 
     onChange = {(e) => handleClick(e.target.value)}
     placeholder='type here'
     onFocus={() => setshow(true)}
     />

     <ul>
        {show && filteredData.map((item) =>{
            return <li onClick={() => setClick(item)}>{item}</li>
        })}
     </ul>
    </div>
  )
}

export default AutoComplete

