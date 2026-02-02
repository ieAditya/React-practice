import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    if(count === 20)
      alert("Counter can't go more than 20")
    else
      setCount(count + 1);
  }

  const removeCount = () => {
    if(count === 0){
      alert("Counter can't go negative!")
    }
    else
      setCount(count - 1);
  }

  return (
    <>
      <h1>Counter current value : {count}</h1>
      <button onClick={addCount}>Increase count</button>
      <button onClick={removeCount}>Decrease count</button>
    </>
  )
}

export default App
