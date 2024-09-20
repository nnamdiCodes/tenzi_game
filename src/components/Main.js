import React from 'react'
/* import Confetti from 'react-confetti' */
import Heading from './Heading'
import Content from './Content'
import Die from './Die'
import Button from './Button'

const Main = ({ 
  dice, handleDieClick, handleButtonClick, tenzies, rollCount, startTime, endTime, bestTime 
}) => {
  return (
    <main className="Main">
        <Heading
          rollCount={rollCount}
          startTime={startTime}
          endTime={endTime}
        />
        <Content bestTime={bestTime}/>
        <section className='dice'>
            {
                dice.map((die) => <Die key={die.id} die={die} handleDieClick={handleDieClick} />)
            }
        </section>
        <Button 
            handleButtonClick={handleButtonClick}
            tenzies={tenzies}
        />
    </main>
  )
}

export default Main