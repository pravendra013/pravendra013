import React, { useEffect } from 'react'
import TaskList from './TaskList'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { changeTab } from '../actions/tab'
import './MyTask.css'
import { useHistory } from 'react-router-dom'
import { assignedTask, assignTask, toggleTasks } from '../actions/tasks'

const Appointed = () => {
  
  const data = {email:useSelector(state=>state.user.email),
    date:useSelector(state=>state.date)}

  const currentTab =useSelector(state=>state.currentTab)
  const dispatch = useDispatch()
  const history =useHistory()

  useEffect(()=>{
    dispatch(assignedTask(history,data))
   },[data.date])

  const onActive=()=>{
    dispatch(changeTab("ACTIVE"))
  }

  const onPending=()=>{
    dispatch(changeTab("PENDING"))
  }

  const onDone=()=>{
    dispatch(changeTab("DONE"))
  }

 

  return (
    <div className='task'>
    <div className='tab'>
      <button className='ABtn' onClick={onActive}>Active</button>
      <button className='PBtn' onClick={onPending}>Pending</button>
      <button className='DBtn' onClick={onDone}>Done</button>
    </div>
      <TaskList tab={currentTab} flag={true} type="appointed" text="Task to me" edit={false}/>
    </div>
  )
}

export default Appointed