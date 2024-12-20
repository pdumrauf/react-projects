import PropTypes from 'prop-types'

export const Square = ({ onClick, children, isSelected }) => {
  return (
    <>
      <div
        className={`square ${isSelected ? '-is-selected' : null}`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  )
}

Square.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  isSelected: PropTypes.bool
}
