// import { useState } from "react"
import PropTypes from 'prop-types';

export const  Square = ({ onClick, value }) => {

  return (
    <>
      <div 
        className='board__square'
        onClick={onClick} 
      >
        {value}
      </div>
    </>
  )
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}