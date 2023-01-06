import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTask, toggleTasks } from '../actions/tasks'
import './taskList.css'

const Task = (props) => {
  
    const [text,setText]=useState(props.task.data)
    const [editing,setEditing]=useState(false)

    const dispatch =useDispatch()

    const clickHandler=()=>setEditing(flag=>!flag)

    const editTask=(event)=>{
        event.preventDefault()
        
        const newTask = {
            id:props.task._id,
            text:text
        }
        dispatch(changeTask(newTask.id,newTask.text))
        console.log("OKAY THIS TASK",newTask)
        clickHandler()
    }

    //TOGGLE TASK TO ACTIVE PENDING DONE DELETE


    return (

    <tr>
        <td style={{display:editing?'none':''}} onClick={props.flag?clickHandler:()=>{}}>{props.task.data}</td>
            <td style={{display:editing?'':'none'}} className="edittask-box">
                <form  className="edittask-box" onSubmit={editTask}>
                    <input type='text' value={text} onChange={(e)=>{
                        setText(e.target.value)}}
                    />
                    <button type="submit">Edit</button>
                </form> 
            </td>

        {props.flag && <td className='usermail'>{props.type==="appoint"?props.task.to:props.task.by}</td>}

        <td className='td'>
            {props.task.status!=='active' && <span><button className='active listBtn' value={props.task._id} name='active' onClick={ props.toggle}>Active</button></span>}
            {props.task.status!=='pending' && <span><button className='pending listBtn' value={props.task._id} name='pending' onClick={ props.toggle}>Pending</button></span>}
            {props.task.status!=='done' && <span><button className='done listBtn' value={props.task._id} name='done' onClick={ props.toggle }>Done</button></span>}
 
            <span><button className='delete listBtn' name='delete' value={props.task._id} onClick={ props.toggle }>Delete</button></span>
   
        </td>
    </tr>
  )
}

export default Task