
import React from 'react'
import { useState,useEffect } from 'react';

const RandomColor = () => {
  
  const [typeOfColor, settypeOfColor] = useState('hex')
  const [color, setcolor] = useState('green')
    
  useEffect(() => {
    (typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor)
  }, [typeOfColor])
  

   function handleCreateRandomRgbColor(){
    const r = Math.floor( Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setcolor(`rgb(${r},${g},${b})`);
    //console.log(`rgb(${r},${g},${b})`);
   }
  function randomColorUtility(length){
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#';

    for(let i=0;i<6;i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setcolor(hexColor);
   // console.log(hexColor);
  }
 
 
  return (
    <div style = {{backgroundColor:color, height:'100vh', width:'100vw' , marginLeft:0}} >
        <button onClick={() => settypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => settypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate random color</button>
        <div style = {{zIndex : '10',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <h1>{typeOfColor === 'hex' ? 'HEX Color' : ''}</h1>
          <h2>{color} </h2>
        </div>
    </div>
  )
}

export default RandomColor
