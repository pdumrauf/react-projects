import { useState } from 'react'

import { Square } from './Square'
import './App.css'

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const TURNS = {
  X: 'X',
  O: 'O',
}

function App() {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X)

  // board [x][y]
  // board[0][0] => 1 square
  // board[0][1] => 2 square


  const handleSquareClick = (row, col) => {
    if(board[row][col] !== null) return
    
    let newBoard = [...board]
    for(let i = 0; i < board.length; i++) {
      let newRow = newBoard[i]
      for(let j = 0; j < board[i].length; j++) {
        if(i === row && j === col) {
          newRow[j] = currentTurn
        }
      }
      newBoard.push(newRow)
    }

    console.log(newBoard)
    console.log(currentTurn)
    setCurrentTurn(currentTurn === TURNS.X ? TURNS.O : TURNS.X)
  }

  return (
    <>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board">
          {row.map((cell, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
              value={cell}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default App