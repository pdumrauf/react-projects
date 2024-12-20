import PropTypes from 'prop-types';
import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
 if(winner === null) return null

 const winnerText = winner === false ? "It's a tie" : 'The winner is:'

  return (
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>
          <footer>
            <button onClick={resetGame}>Restart</button>
          </footer>
        </div>
      </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.any,
  resetGame: PropTypes.func
}