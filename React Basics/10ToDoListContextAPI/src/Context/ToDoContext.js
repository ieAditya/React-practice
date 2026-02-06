import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDoList : [
        {
            id: 1,
            toDo: "Temp ToDo 1",
            completed: false
        },
        {
            id: 2,
            toDo: "Temp ToDo 2",
            completed: false
        }
    ],
    addToDo: (toDo) => {},
    updateToDo: (id, toDo) => {},
    deleteToDo: (id) => {},
    toggleToDo: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider