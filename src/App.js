import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Main from './components/Main';


function App() {

  const generateNewObject = () => {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false
    }
  }

  const diceObject = () => {
    const newArray = []
    for(let i =0; i < 10; i++) {
      newArray.push(generateNewObject())
    }
    return newArray
  }
  
  const [dice, setDice] = useState(diceObject())
  const [tenzies, setTenzies] = useState(false)
  const [rollCount, setRollCount] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [bestTime, setBestTime] = useState(JSON.parse(localStorage.getItem('bestTime')) || null)

  useEffect(() => {
    setStartTime(Date.now())
   
  }, [startTime]) 

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
      setTenzies(true)
      const newEndTime = Date.now()
      setEndTime(newEndTime)
      const currentTimeTaken = Math.floor((newEndTime - startTime) / 1000)
      if (!bestTime || currentTimeTaken < bestTime) {
        setBestTime(currentTimeTaken)
        localStorage.setItem('bestTime', JSON.stringify(currentTimeTaken))
      }
    }
  }, [dice, bestTime])

  const handleDieClick = (id) => {
    const holdDice = dice.map((die) => {
      return (
        die.id === id ? {...die, isHeld: !die.isHeld} : die
      )
    })
    setDice(holdDice)
  }

  const handleButtonClick = () => {
    if (!tenzies) {
      const rollDice = dice.map((die) => {
        return (
          die.isHeld ? die : generateNewObject()
        )
      })
      setDice(rollDice)
      setRollCount(prevCount => prevCount + 1)
    } else {
      setTenzies(false)
      setDice(diceObject)
      setRollCount(0)
      setEndTime(null)
    }
    
  }

  return (
    <div className="App">
      <Main
        dice={dice} 
        handleDieClick={handleDieClick}
        handleButtonClick={handleButtonClick}
        tenzies={tenzies}
        rollCount={rollCount}
        startTime={startTime}
        endTime={endTime}
        bestTime={bestTime}
      />
    </div>
  );
}

export default App;
