import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [passwordLength, setLength] = useState(8)
  const [useNumber, setUseNumber] = useState(false)
  const [useChar, setUseChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const generateRandomPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(useNumber)
      str += "0123456789"
    if(useChar)
      str += "~`!@#$%^&*"

    for(let it = 0; it < passwordLength; it++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass)
  }, [passwordLength, useNumber, useChar, setPassword]);

  useEffect(() => {
    generateRandomPassword()
  }, [passwordLength, useNumber, useChar, generateRandomPassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 p-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='mt-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Generated password reflects here'
          ref={passwordRef}
          readOnly
        />
        <button
        className='mt-4 rounded-lg outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={8} max={50}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          value={useNumber}
          onChange={() => setUseNumber(prev => !prev)}
          />
          <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          value={useChar}
          onChange={() => setUseChar(prev => !prev)}
          />
          <label>Character</label>
        </div>
      </div>

    </div>
  )
}

export default App
