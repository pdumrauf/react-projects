import { useState } from 'react'

import { Square } from './Square'
import './App.css'

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function App() {
  const [square, setSquare] = useState(null)

  // board [x][y]
  // board[0][0] => 1 square
  // board[0][1] => 2square

  const TURNS = {
    X: 'X',
    O: 'O',
  }

  const handleSquareClick = () => {
    setSquare('X')
  }

  return (
    <>
{
  board.map((row, rowIndex) => (
    <div key={rowIndex} className="board">
      {row.map((cell, colIndex) => (
        <Square
          key={`${rowIndex}-${colIndex}`}
          onClick={() => handleSquareClick}
          value="X"
        />
      ))}
    </div>
  ))
}

    </>
  )
}

export default App