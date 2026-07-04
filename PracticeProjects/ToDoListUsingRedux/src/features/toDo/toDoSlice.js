import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    toDos : [
        {
            id: 1,
            text: "Temp todo",
            completed: false
        }
    ]
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.toDos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        removeToDo: (state, action) => {
            state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload)
        },
        updateToDo: (state, action) => {
            state.toDos = state.toDos.map((toDo) => toDo.id === action.payload.id ? {...toDo, text: action.payload.text} : toDo)
        },
        toggleCompleted: (state, action) => {
            state.toDos = state.toDos.map((toDo) => toDo.id === action.payload ? {...toDo, completed: !toDo.completed} : toDo)
        }
    }
})

export const {addToDo, removeToDo, updateToDo, toggleCompleted} = toDoSlice.actions

export default toDoSlice.reducer