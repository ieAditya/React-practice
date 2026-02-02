import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name : "Aditya",
    age : 24
  };

  let myArr = [1, 2, 3, 4, "adi"];

  return (
    <>
      <h1 className='font-medium text-black bg-white p-4 rounded-xl'>Tailwind test</h1>

      <Card username='Aditya' btnText="Button text 1" obj = {myObj} arr = {myArr} />
      <Card username='Sahil' btnText="Button text 2" obj = {myObj} arr = {myArr} />

    </>
  )
}

export default App
