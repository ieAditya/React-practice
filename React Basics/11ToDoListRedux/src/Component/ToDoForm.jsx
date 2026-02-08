import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addToDo } from "../features/toDo/toDoSlice";

function TodoForm() {
    const [toDoText, setToDoText] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!toDoText || toDoText.length == 0) return;

        dispatch(addToDo(toDoText));
        setToDoText("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;