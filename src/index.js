import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './Components/game';
//making class components, must always have render and constructor classes
//Making components always have names that start with uppercases

//dom renderer. 
//purpose of react strict tag is to wrap application code to run additional life cycle checks 
const game = ReactDOM.createRoot(document.getElementById('game'));
game.render(
  <React.StrictMode>
    <Game/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
