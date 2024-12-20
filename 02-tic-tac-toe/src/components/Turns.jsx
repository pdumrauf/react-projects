import PropTypes from 'prop-types';

import { Square } from "./Square"
import { TURNS } from "../constants"

export function Turns({ currentTurn }) {
  return (
      <section className='turn'>
        <Square isSelected={currentTurn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={currentTurn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
  )
}

Turns.propTypes = {
  currentTurn: PropTypes.string
}