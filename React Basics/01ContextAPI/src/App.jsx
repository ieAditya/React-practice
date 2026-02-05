import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvide'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
