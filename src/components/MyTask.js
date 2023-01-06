import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TaskList from './TaskList'
import {useDispatch} from 'react-redux'
import './MyTask.css'
import { personalTask, toggleTasks } from '../actions/tasks'
import { useHistory } from 'react-router-dom'

const MyTask = () => {

  const data = {email:useSelector(state=>state.user.email),
                date:useSelector(state=>state.date)}
  

  // const currentTab =useSelector(state=>state.currentTab)
  const dispatch = useDispatch()
  const history =useHistory()

  useEffect(()=>{
    dispatch(personalTask(history,data))
  },[data.date])

  const onActive=()=>{
    // dispatch(changeTab("ACTIVE"))
    dispatch({type:"ACTIVE"})
  }

  const onPending=()=>{
    // dispatch(changeTab("PENDING"))
    dispatch({type:"PENDING"})
  }

  const onDone=()=>{
    // dispatch(changeTab("DONE"))
    dispatch({type:"DONE"})
  }



  return (
    <div className='task'>

      <div className='tab'>
        <button className='ABtn' onClick={onActive}>Active</button>
        <button className='PBtn' onClick={onPending}>Pending</button>
        <button className='DBtn' onClick={onDone}>Done</button>
      </div>

      <TaskList flag={false} type="myList" text="Personal Task" edit={true}/>
      
    </div>
  )
}

export default MyTask