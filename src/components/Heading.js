import React from 'react'

const Heading = ({ rollCount, startTime, endTime }) => {
  return (
    <section  className='Heading'>
          <h1>Tenzie Dice Game</h1>
          <p className='rollCount'>
            Roll Count: {rollCount}
          </p>
          <p className='timeTaken'>
            Time Taken: {endTime ? Math.floor((endTime - startTime) / 1000) : 0} seconds
          </p>
    </section>
  )
}

export default Heading