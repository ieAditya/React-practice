import { useContext, useState } from 'react'
import './App.css'
import { ToDoProvider, useToDo } from './Context';

function App() {
  const [toDos, setToDos] = useState([]);

  const {toDoList} = useContext(useToDo)

  const addToDo = (toDo) => {
    setToDos((prev) => [{id: Date.now(), ...toDo}, ...prev])
  }

  const updateToDo = (id, toDo) => {
    setToDos((prevList) => prevList.map((prevToDo) => (prevToDo.id === id ? toDo : prevToDo)))
  }

  const deleteToDo = (id) => {
    setToDos((prevList) => prevList.filter((element) => element.id != id))
  }
  
  const toggleToDo = (id) => {
    setToDos((prevList) => prevList.map((prev) => (prev.id === id ? {...prev, completed : !prev.completed} : prev)))
  }

  return (
    <ToDoProvider value={{toDoList, addToDo, updateToDo, deleteToDo, toggleToDo}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
    </div>
    </ToDoProvider>
  )
}

export default App
