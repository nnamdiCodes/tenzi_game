import React from 'react'

const Content = ({ bestTime }) => {

  const bestTimeText = bestTime !== null ? `Best Time: ${bestTime} seconds` : 'Best Time: No best time yet'

  return (
    <section className="Content">
        <h4 className='bestTime'>
          {bestTimeText}
        </h4>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </section>
  )
}

export default Content