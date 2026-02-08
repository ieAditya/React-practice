import { useState } from 'react'
import { useSelector } from 'react-redux';
import './App.css'
import TodoForm from './Component/ToDoForm';
import ToDoItem from './Component/ToDoItem';

function App() {

  const toDos = useSelector(state => state.toDos);

  return (
    <>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
          {toDos.map((toDoElement) => (
            <div className='w-full mt-4'>
              <ToDoItem toDo={toDoElement} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
