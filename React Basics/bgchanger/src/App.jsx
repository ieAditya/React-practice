import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
        <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
          <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 rounded-xl">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                          <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                              <button onClick={() => setColor("red")} className="rounded-3xl px-3 py-2 text-sm font-medium text-red-50 bg-red-600">Red</button>
                              <button onClick={() => setColor("cyan")} className="rounded-3xl px-3 py-2 text-sm font-medium text-red-50 bg-cyan-600">Cyan</button>
                              <button onClick={() => setColor("green")} className="rounded-3xl px-3 py-2 text-sm font-medium text-gray-300 bg-green-600">Green</button>
                              <button onClick={() => setColor("yellow")} className="rounded-3xl px-3 py-2 text-sm font-medium text-gray-300 bg-yellow-600">Yellow</button>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          <p>
            Click on button to change background color
          </p>
        </div>
    </>
  )
}

export default App
