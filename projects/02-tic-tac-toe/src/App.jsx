import { useState } from 'react'

import { Square } from './Square'
import './App.css'

const boardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

  // board[x][y]
  // board[0][0] => 1 square
  // board[0][1] => 2 square

const TURNS = {
  X: 'X',
  O: 'O',
}

const WINNING_COMBINATIONS = [
  // vertical
  [[0,0], [1,0], [2,0]],
  [[0,1], [1,1], [2,1]],
  [[0,2], [1,2], [2,2]],
  // horizontal
  [[0,0], [0,1], [0,2]],
  [[1,0], [1,1], [1,2]],
  [[2,0], [2,1], [2,2]],
  // diagonal
  [[0,0], [1,1], [2,2]],
  [[0,2], [1,1], [2,0]],
]

function App() {
  const [board, setBoard] = useState(boardGame)
  const [currentTurn, setCurrentTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const handleSquareClick = (row, col) => {
    // no update if there's already X, O or winner
    if (board[row][col] || winner) return
  
    // update board
    const newBoard = board.map(row => [...row])
    newBoard[row][col] = currentTurn
    console.log('newBoard', newBoard)
    setBoard(newBoard)

    // change turn
    const newTurn= currentTurn === TURNS.X ? TURNS.O : TURNS.X
    setCurrentTurn(newTurn)
  
    //  check winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner);
      console.log('newWinner',newWinner)
    }
  }
  
  // TODO - not working on horizontal and diagonal, review!
  const checkWinner = (board) => {
    // check all winning combinations
    for(let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination

      if( board[a[0]][a[1]] && 
          board[a[0]][a[1]] === board[b[0]][b[1]] && 
          board[a[0]][a[1]] === board[c[0]][c[1]] 
      ) {
        console.log('winner', board[a[0]][a[1]])
        return board[a[0]][a[1]] // X or O
      }

      return null // no winner
    }
  }

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board">
            {row.map((cell, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {cell}
              </Square>
            ))}
          </div>
        ))}
      </section>

      <section className='turn'>
        <Square isSelected={currentTurn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={currentTurn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App