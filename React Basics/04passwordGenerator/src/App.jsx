import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import generatePassword from './generatePassword.js'

function App() {

  const [pswd, setPswd] = useState("");
  const [useSpecialChar, setUseSpecialChar] = useState(false);
  const [useNumber, setUseNumber] = useState(false);
  const [length, setLength] = useState(8);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = generatePassword(length, useNumber, useSpecialChar);
    setPswd(pass);
  }, [useSpecialChar, useNumber, length])

  
  useEffect(()=>{
    passwordGenerator;
  }, [length, useNumber, useSpecialChar, passwordGenerator])

  const handleCopy = ()=>{
    const value = passwordRef.current?.value;
    navigator.clipboard.writeText(value);
  }


  return (
    <>
    <input type="text" value={pswd} ref={passwordRef} disabled/>
    <button onClick={handleCopy}>Copy</button>
    <br />
    <label>Length: </label>
    <input type="range" value={length} onChange={(e) => setLength(e.target.value)}/>
    <label>{length}</label>

    <input type="checkbox" value={useNumber} onChange={(e) => setUseNumber(e.target.value)}/>
    <label>Number</label>

    <input type="checkbox" value={useSpecialChar} onChange={(e) => setUseSpecialChar(e.target.value)}/>
    <label>Special Character</label>
    </>
  )
}

export default App
