import React from 'react'

const Heading = ({ rollCount, startTime, endTime }) => {
  return (
    <section  className='Heading'>
          <p>
            Roll Count: {rollCount}
          </p>
          <h1>Tenzies</h1>
          <p className='timeTaken'>
            Time Taken: {endTime ? Math.floor((endTime - startTime) / 1000) : 0} seconds
          </p>
    </section>
  )
}

export default Heading