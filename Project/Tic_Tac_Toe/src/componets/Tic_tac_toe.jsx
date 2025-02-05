import React, { useState } from 'react';

function Tic_tac_toe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXset, setIsXset] = useState(true);
    const [winner, setWinner] = useState(null);

    const rendersquare = (index) => {
        return (
            <button className='square' onClick={() => handleclick(index)}>{board[index]}</button>
        );
    };

    const handleclick = (index) => {
        if (board[index] != null || winner) {
            return;
        }
        const newboard = [...board];
        newboard[index] = isXset ? 'X' : 'O';
        setBoard(newboard);
        setIsXset(!isXset);
        const winnercombination = checkWinner(newboard);
        if (winnercombination) {
            setWinner(newboard[winnercombination[0]]);
        }
    };

    const checkWinner = (newboard) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (newboard[a] && newboard[a] === newboard[b] && newboard[a] === newboard[c]) {
                return winningCombinations[i];
            }
        }
        return null;
    };

    const handlereset = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    };

    return (
        <>
        <h1 className='heading'>Tic Tac Toe</h1>       
        <div className='body'>
        <div className='main'>
            <div className='board'>
                <div className='board-row'>
                    {rendersquare(0)}
                    {rendersquare(1)}
                    {rendersquare(2)}
                </div>
                <div className='board-row'>
                    {rendersquare(3)}
                    {rendersquare(4)}
                    {rendersquare(5)}
                </div>
                <div className='board-row'>
                    {rendersquare(6)}
                    {rendersquare(7)}
                    {rendersquare(8)}
                </div>
            </div>
           <div className='resethead'>
           <button className='reset' onClick={handlereset}>Reset</button>
           </div>
           <div className='winner'>
           {winner && <div>{winner} is the winner of this game</div>}
           </div>
        </div>
        </div>
        </>
    );
}

export default Tic_tac_toe;
