import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Board } from './components/Board'
import { Turns } from './components/Turns'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner, checkEndGame } from './logic/board'
import { saveGameStorage, resetGameStorage } from './logic/storage/index'
import { TURNS } from './constants'
import './App.css'

// access to square => board[x][y]
const boardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function App() {
  const [board, setBoard] = useState(()=> {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : boardGame
  })
  const [currentTurn, setCurrentTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const handleSquareClick = (row, col) => {
    // no update if there's already X, O or winner
    if (board[row][col] || winner) return

    // update board
    const newBoard = board.map(row => [...row])
    newBoard[row][col] = currentTurn
    setBoard(newBoard)

    // change turn
    const newTurn= currentTurn === TURNS.X ? TURNS.O : TURNS.X
    setCurrentTurn(newTurn)
    saveGameStorage({board: newBoard, turn: newTurn})
  
    //  check winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(boardGame)
    setCurrentTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <Board board={board} handleSquareClick={handleSquareClick}/>
      <Turns currentTurn={currentTurn}/>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App