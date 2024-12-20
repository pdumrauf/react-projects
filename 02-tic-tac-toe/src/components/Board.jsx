import PropTypes from 'prop-types';
import { Square } from "./Square"

export function Board({board, handleSquareClick}) {
  return (
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
  )
}

Board.propTypes = {
  board: PropTypes.array,
  handleSquareClick: PropTypes.func,
}