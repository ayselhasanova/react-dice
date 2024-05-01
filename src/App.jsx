import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dice from './Dice';
import './App.css'

const App = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="app">
      <h1>Dice Roller</h1>
      <div className="dice-container">
        <Dice number={dice1} />
        <Dice number={dice2} />
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default App;
