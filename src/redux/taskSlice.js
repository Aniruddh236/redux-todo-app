import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    completedTasks: [],
    dueTasks: []
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(
                {
                    id: Date.now(),
                    taskName: action.payload,
                    lapsedTime:0,
                    progress: 0,
                    completed: false
                }
            )
        },          

        updateTask: (state, action) =>{
            const {id , updates} = action.payload;
            const task = state.tasks.find(task=> task.id === id);
            if(task){
                Object.assign(task,updates)
            }
        },
        dueTask:(state, action)=>{
                const id = action.payload;
                const task = state.tasks.find(task => task.id===id);
                if(!state.dueTasks.find(task => task.id===id))
                    state.dueTasks.push(task);
        },

        completeTask: (state, action) => {
            const id = action.payload;
            const taskToBeRemoved = state.tasks.filter(task => task.id === id);
            const updatedTasks = state.tasks.filter(task => task.id !== id);
            state.completedTasks.push(taskToBeRemoved)
            state.tasks = updatedTasks;
            
        }
    }
})


export const { addTask,updateTask,dueTask,completeTask } = taskSlice.actions;

export default taskSlice.reducer;