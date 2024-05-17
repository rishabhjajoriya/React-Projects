import "./styles.css";
import React from "react";
import { useState,useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setsquares] = useState(Array(9).fill(""));
  const [IsXturn, setIsXturn] = useState(true);
  const [Status, setStatus] = useState('');
  function handleClick(currentIdx) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[currentIdx]) return;
    cpySquares[currentIdx] = IsXturn ? "X" : "O";
    setIsXturn(!IsXturn);
    setsquares(cpySquares);
  }

  // 0 1 2
  // 3 4 5
  // 6 7 8
 function handleRestart(){
    setIsXturn(true);
    setsquares(Array(9).fill(''));
 }
  useEffect(() => {
    if(!getWinner(squares) && squares.every(item => item !== "")){
        setStatus(`Match is draw. Please restart the game.`)
    }else if(getWinner(squares)){
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`)
    } else{
        setStatus(`Next turn is of ${IsXturn ? 'X' : 'O'}`);
    }
   
  }, [squares,IsXturn])
  
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
     <h1>
     {Status}
     </h1>
     <button onClick={handleRestart} >Restart the game!</button>
    </div>
  );
}
