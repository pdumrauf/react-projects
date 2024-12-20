import { WINNING_COMBINATIONS } from "../constants"

export const checkWinner = (board) => {
  for(let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination

    const valueA = board[a[0]][a[1]]
    const valueB = board[b[0]][b[1]]
    const valueC = board[c[0]][c[1]]

    if (valueA && valueA === valueB && valueA === valueC) {
      return valueA; // return 'X' or 'O'
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every(row => row.every(cell => cell !== null))
}