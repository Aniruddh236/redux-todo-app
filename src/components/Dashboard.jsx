import React, { memo, useEffect } from 'react';
import {useSelector} from 'react-redux'

// import CustomCard from './utility/CustomCard'
import '../styles/Dashboard.css'
import MemoizedCustomCard from './utility/CustomCard';
// import { dueTasks } from '../redux/taskSlice';


function Dashboard() {

const totalTasks = useSelector(state => state.tasks.tasks);
const completedTasks = useSelector(state => state.tasks.completedTasks);
const dueTasks = useSelector(state => state.tasks.dueTasks)

useEffect(()=>{

    console.log("dashboard render")

  },[])

    return <>
        <div className='dashboard-container'>

            <div className='first-card'><MemoizedCustomCard tasks={totalTasks} cardName="Total tasks in queue" /></div>
            <div className='second-card'><MemoizedCustomCard tasks={completedTasks} cardName="Closed tasks"/></div>
            <div className='third-card'><MemoizedCustomCard tasks={dueTasks} cardName="Due tasks"/></div>
        </div>
    </>
}



export default Dashboard;