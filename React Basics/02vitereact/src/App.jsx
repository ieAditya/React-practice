import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [showFirst, setShowFirst] = useState(false)
  console.log("Show first: ", showFirst);
  

  useEffect(()=>{
    console.log("Running useEffect");
    
    setTimeout(()=> {
      console.log("Running timer function");
      setShowFirst(!showFirst)
    }, 1000)
    
  }, [])

  return (
    <>
    {console.log("Component loaded, ShowFirst : ", showFirst)}
    {
      showFirst ? 
      <div>
        <Card name="Aditya" />
        <Card name="Sahni" />
      </div>
      : <Card name="Sahni" />
    }
    
    <button onClick={()=> setShowFirst(!showFirst)}>Change showFirst value</button>
    </>
  )
}

export default App
