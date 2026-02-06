import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider, useToDo } from './Context';
import TodoForm from './Component/ToDoForm';
import ToDoItem from './Component/ToDoItem';

function App() {
  const [toDoList, setToDoList] = useState(() => {
    try {
      const stored = localStorage.getItem("toDoList");
      return stored ? JSON.parse(stored) :[];
    } catch {
      return [];
    }
  });

  const addToDo = (toDo) => {
    console.log(toDoList);
    console.log("toDo: ", toDo);
    setToDoList((prev) => [{id: Date.now(), ...toDo}, ...prev])
    console.log(toDoList)
  }

  const updateToDo = (id, toDo) => {
    setToDoList((prevList) => prevList.map((prevToDo) => (prevToDo.id === id ? toDo : prevToDo)))
  }

  const deleteToDo = (id) => {
    setToDoList((prevList) => prevList.filter((element) => element.id != id))
  }
  
  const toggleToDo = (id) => {
    setToDoList((prevList) => prevList.map((prev) => (prev.id === id ? {...prev, completed : !prev.completed} : prev)))
  }

  // useEffect(()=>{
  //   const todos = JSON.parse(localStorage.getItem("toDoList"))
  //   // console.log(toDoList)

  //   if (todos && todos.length > 0) {
  //     setToDoList(todos);
  //   }
  // }, []);

  useEffect(()=>{
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList])

  return (
    <ToDoProvider value={{toDoList, addToDo, updateToDo, deleteToDo, toggleToDo}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {toDoList.map((element) => (
                  <div className='w-full' key={element.id}>
                    <ToDoItem toDo={element} />
                  </div>
                ))}
            </div>
        </div>
    </div>
    </ToDoProvider>
  )
}

export default App
