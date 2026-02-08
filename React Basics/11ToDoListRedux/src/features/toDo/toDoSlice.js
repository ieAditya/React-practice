import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    toDos: [{id: 1, text: "Temp to do", completed: false}]
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addToDo : (state, action) => {
            const toDo = {
                id: nanoid(),
                text: action.payload
            }
            state.toDos.push(toDo)
        },
        removeToDo : (state, action) => {
            state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload)
        },
        updateToDo : (state, action) => {
            state.toDos = state.toDos.map((toDo) => toDo.id == action.payload.id ? {...toDo, text: action.payload.text} : toDo)
        },
        toggleCompleted : (state, action) => {
            console.log("working toggle completed")
            state.toDos = state.toDos.map((toDo) => toDo.id === action.payload ? {...toDo, completed: !toDo.completed} : toDo)
            console.log("Done toggle completed", state.toDos)
        }
    }
})

export const {addToDo, removeToDo, updateToDo, toggleCompleted} = toDoSlice.actions;

export default toDoSlice.reducer;