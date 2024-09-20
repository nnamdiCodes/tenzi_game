import React from 'react'

const Button = ({ handleButtonClick, tenzies }) => {
  return (
    <section>
      <button className="Button"
          onClick={handleButtonClick}
      >
          { tenzies ? 'New Game' : 'Roll' }
      </button>
    </section>
  )
}

export default Button