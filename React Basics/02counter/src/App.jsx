import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setCount(count-1)}>Decrease</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default App
