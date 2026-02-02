import {useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('');

  return (
    <>
    <div className= 'w-full h-screen'
    style={{background: bgColor}}>
      <h1>Hello</h1>
      <button onClick={()=> setBgColor('red')}>Change bg to red</button>
      <button onClick={()=> setBgColor('green')}>Change bg to green</button>
    </div>
    </>
  )
}

export default App
