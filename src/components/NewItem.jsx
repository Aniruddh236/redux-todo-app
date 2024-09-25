import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import '../styles/NewItem.css'
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function NewItem() {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleTask = (e)=>{
        setTask(e.target.value)
    }
    const handleAddTask = ()=>{
            if(task.trim()){
                dispatch(addTask(task));
                setTask('')
            }

    }
    return <>
        <div className="newItem-container"> 
            <TextField
                label="Add a task"
                variant="outlined"
                className="inputField"
                value={task}
                onChange={handleTask}
            />
            <Button
                variant="contained"
                color="primary"
                className="addButton"
                onClick={handleAddTask}
            >Add</Button>
        </div>
    </>
}