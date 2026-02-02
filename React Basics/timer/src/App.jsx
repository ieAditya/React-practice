import { useState } from 'react'
import './App.css'

function App() {

  const [seconds, timerFunc] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const runTimer = () => {
    if(timerId === null){
      const id = setInterval(()=>{
        timerFunc(seconds => seconds + 1);
      }, 1000);
      setTimerId(id);
    }
  }

  const stopTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }

  const resetTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
    }
    setTimerId(null);
    timerFunc(0);
  }

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={runTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
