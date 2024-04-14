import React from 'react';
import { useState } from 'react';
import './game.css';



//calculated using each box with value 2^x and three in a row being added


function Game(){
    const [p1, setP1] = useState('');
   
    return(
            <div>
                <h1>Tic Tac Toe</h1>
                <h2>Pick X or 0, Player 1!</h2>
                <div className="button-contaienr">
                    <button id="x" onClick={setP1 = 'x'}>X</button>
                    <button id="o">O</button>
                </div>
                
            </div>
        );
};

/*
function renderBoard(){
    const [winner, setWinner] = useState(false);
    const [p1moves, setP1moves] = useState([]);
    const [p2moves, setP2moves] = useState([]);

};
*/

export default Game