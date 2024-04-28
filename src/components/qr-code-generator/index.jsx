import React from 'react'
import QRCode from 'react-qr-code'
import { useState } from 'react';
const QRCodeGenerator = () => {

    const [input, setinput] = useState('');
    const [qrcode, setqrcode] = useState('');

    function handleClick(){
        setqrcode(input);
        setinput('');
    }
  return (
    <div style = {{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1>QR Code Generator.</h1>
      <div>
        <input value={input}
        onChange={e => setinput(e.target.value)} type="text" name='' placeholder='Enter Value Here!' />
        <button onClick={handleClick}>Generate</button>
       
      </div>
      <div>
        <QRCode  id="qr-code-value" value={qrcode} size={400} bgColor="#fff"/>
      </div>
    </div>

  )
}

export default QRCodeGenerator
