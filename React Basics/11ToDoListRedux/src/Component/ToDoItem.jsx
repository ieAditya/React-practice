import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateToDo, toggleCompleted, removeToDo } from "../features/toDo/toDoSlice";

function ToDoItem({ toDo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [toDoText, setToDoText] = useState(toDo.text)
    const [prevValue, setPrevValue] = useState(toDo.text)

    const dispatch = useDispatch();

    const editTodo = () => {
        if(toDoText && toDoText.length > 0){
            dispatch(updateToDo({toDo, text: toDoText}))
            setPrevValue(toDoText)
        }
        else
            setToDoText(prevValue);
        
        setIsTodoEditable((prev) => !prev)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                toDo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={toDo.completed}
                onChange={(e) => {
                    console.log("Working onchange", toDo.completed)
                    dispatch(toggleCompleted(toDo.id))
                    console.log("Working onchange 2", toDo.completed)
                }}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${toDo.completed ? "line-through" : ""}`}
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
                readOnly={!isTodoEditable}
            />
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (toDo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={toDo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeToDo(toDo.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default ToDoItem;
