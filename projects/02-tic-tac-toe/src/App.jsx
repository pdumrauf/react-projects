import { useState } from 'react'

import { Square } from './Square'
import './App.css'

const boardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const TURNS = {
  X: 'X',
  O: 'O',
}

function App() {
  const [board, setBoard] = useState(boardGame)
  const [currentTurn, setCurrentTurn] = useState(TURNS.X)

  // board[x][y]
  // board[0][0] => 1 square
  // board[0][1] => 2 square


  const handleSquareClick = (row, col) => {
    if(board[row][col] !== null) return
    
    let newBoard = [...boardGame]
    for(let i = 0; i < newBoard.length; i++) {
      let newRow = newBoard[i]
      for(let j = 0; j < newBoard[i].length; j++) {
        if(i === row && j === col) {
          newRow[j] = currentTurn
        }
      }
      newBoard[i] = newRow
    }
    
    console.log('newboard', newBoard)
    console.log('board', board)
    console.log('currentTurn', currentTurn)
    setBoard(newBoard)
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