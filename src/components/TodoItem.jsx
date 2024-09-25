import React, { useEffect, useState } from "react";
import { Box, Checkbox, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

import "../styles/ToDoItem.css"
import { useDispatch } from "react-redux";
import { completeTask, dueTask, updateTask } from "../redux/taskSlice"





function ToDoItem({ task }) {

    // const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    // Simulate progress change over time
    useEffect(() => {
        let timer;
        if (task.progress < 100) {
             timer = setInterval(() => {
                // setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
                const newProgress = task.progress + 1;
                dispatch(updateTask({id: task.id, updates:{progress: newProgress >= 100 ? 100 : newProgress}}))
            }, 1000);
        }else{
            dispatch(dueTask(task.id))
        }

        return () => clearInterval(timer); // Clear interval on component unmount
    }, [task, dispatch]);


    function handleCheckBox() {

    }

    return <div className="todo-item-container" key={task.id}>
        <List className="todo-item">
            <ListItem style={{ textDecoration: "none" }}>
                <ListItemIcon>
                    <Checkbox onChange={() => dispatch(completeTask(task.id))} />
                </ListItemIcon>
                <ListItemText className="todo-item-text">{task.taskName}</ListItemText>
                <Box className="progress-container ">
                    <Typography variant="h10" className="progress-label">Time lapsed</Typography>
                    <LinearProgress variant="determinate" value={task.progress} className="progress-bar" />
                    <Typography variant="body2" color="textSecondary" className="progress-percentage">{`${task.progress}%`}</Typography>
                </Box>
            </ListItem>
        </List>
    </div>
}

export default ToDoItem;