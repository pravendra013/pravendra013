import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTasks } from '../actions/tasks'
import Task from './Task'
import './taskList.css'
 
 const TaskList = (props) => {


  const task = useSelector(state=>state.todos)
  const currentTab =useSelector(state=>state.currentTab)
  const dispatch = useDispatch()
  useEffect(()=>{console.log("hey")},[task])
  

  //decide which status task to render 
  const getTodos = () => {
    if (currentTab === 'active') {
        return task.filter(todo=>todo.status==='active')
    } else if (currentTab === 'pending') {
        return task.filter(todo => todo.status==='pending')
    } else if (currentTab === 'done') {
        return task.filter(todo => todo.status==='done')
    }
  }
  const toggle =(event)=>{
    // console.log(event.target.value,event.target.name)
    dispatch(toggleTasks(event.target.value,event.target.name))
  }
  return (
     
  <div className='table-div' >
      <h5>{props.text}</h5>
    <table>
      <thead >
       <tr >
          <th>Task Name</th>
          {props.flag && <th >{props.type === "appoint" ? "Assign To" : "Assignd By"}</th>}
          <th>Change Status</th>
       </tr>
      </thead>
      <tbody>

        { getTodos().map(task=>(
          <>
            <Task task ={task} flag={props.flag} edit={props.edit} type={props.type} toggle={toggle}/>
          </>
          ))
        }
      </tbody>
    </table>
    {/* <h4 className='noRecord'>No Record found</h4> */}
  </div>
  
  )
}

export default TaskList