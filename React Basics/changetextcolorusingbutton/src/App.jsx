import { useState } from 'react'
import './App.css'

function App() {
  const [color, setBgColor] = useState("white")


  return (
    <>
      <h1 style={{color : color}}>Color is {color}</h1>

      <button onClick={() => setBgColor("blue")}>Change color to Blue</button>
      <button onClick={() => setBgColor("green")}>Change color to Green</button>
      <button onClick={() => setBgColor("white")}>Change color to Green</button>
    </>
  )
}

export default App
