import React from "react";
import ToDoItem from "./TodoItem";
import { useSelector } from 'react-redux'

import "../styles/ToDoList.css"

function TodoList() {
    const tasks = useSelector((state) => state.tasks.tasks)


    return <>
        <div>
        {tasks && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} />
                ))
            ) : (
                <p>No tasks available</p> // Handle empty task list scenario
            )}
        </div>

    </>
}


export default TodoList;