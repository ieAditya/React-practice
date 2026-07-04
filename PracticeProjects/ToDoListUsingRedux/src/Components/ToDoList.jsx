import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeToDo, toggleCompleted, updateToDo } from '../features/toDo/toDoSlice'

function ToDoList({toDo}) {

    const [isToDoEditable, setIsToDoEditable] = useState(false)
    const [toDoText, setToDoText] = useState(toDo.text)

    const dispatch = useDispatch()

    const handleToggle = (e) => {
        dispatch(toggleCompleted(toDo.id))
    }
    const handleEditToDo = (e) => {
        dispatch(updateToDo({id: toDo.id, text: toDoText}))
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                toDo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
            type='checkbox'
            value={toDo.completed}
            onChange={handleToggle}
            />
            <input
            type='text'
            className={`border outline-none w-full bg-transparent rounded-lg ${
                    isToDoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${toDo.completed ? "line-through" : ""}`}
            value={toDoText}
            readOnly={!isToDoEditable}
            onChange={(e) => setToDoText(e.target.value)}
            />

            <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={(e) => {
                if(isToDoEditable){
                    handleEditToDo
                    setIsToDoEditable(false)
                }
                else{
                    setIsToDoEditable(true)
                }
            }}
            >
                {isToDoEditable ? "📁" : "✏️"}
            </button>
            <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeToDo(toDo.id))}>❌</button>
        </div>
    )
}

export default ToDoList