import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'

import CustomCard from './utility/CustomCard'
import '../styles/Dashboard.css'
// import { dueTasks } from '../redux/taskSlice';



export default function Dashboard() {

const totalTasks = useSelector(state => state.tasks.tasks);
const completedTasks = useSelector(state => state.tasks.completedTasks);
const dueTasks = useSelector(state => state.tasks.dueTasks)
useEffect(()=>{
    console.log(totalTasks)
},[totalTasks])

    return <>
        <div className='dashboard-container'>

            <div className='first-card'><CustomCard tasks={totalTasks} cardName="Total tasks in queue" /></div>
            <div className='second-card'><CustomCard tasks={completedTasks} cardName="Closed tasks"/></div>
            <div className='third-card'><CustomCard tasks={dueTasks} cardName="Due tasks"/></div>
        </div>
    </>
}