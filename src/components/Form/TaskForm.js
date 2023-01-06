import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'
import { addTask } from '../../actions/tasks'
import {useDispatch} from 'react-redux'
import './taskForm.css'

const TaskForm = () => {
  
  //state declaration
  const [flag,setFlag] = useState(false)
  const [taskname,setTaskname]= useState("")
  const [validTask,setValidTask] =useState(null)
  // const [validUser,setValidUser] = useState(null)
  // const [formIsValid,setFormIsValid] = useState(null)

  const [to,setTo] = useState("")


  const dispatch =useDispatch();
  
  

  //GETTING IMP DATA FROM REDUX
  const date = useSelector(state=>state.date)
  const user = useSelector(state=>state.user.email)
  const userlist = useSelector(state=>state.userList)
  const currentUser = useSelector(state=>state.user.email)
  
  
  //on ForMebutton Click
  const onForMeHandler=()=>{
    // if(validTask===true)
      setTo(currentUser);
  }

  //on For other button
  const onForOtherButton=()=>{
    setFlag(state=>!state)
  }

  const clear=()=>{
    setTo("");
    setTaskname("");
    setFlag(false);
    setValidTask(null)
    
  }

  //on task input chnage
  const onTasknameChange=(event)=>{
    setTaskname(event.target.value)
    // setTimeout(()=>},1000)
    setValidTask(taskname.trim().length===0)
  }


  //username
  const onUsernameChange=(event)=>{
    setTo(event.target.value)
    // setValidUser(()=>{
    //   for (let i=0;i<userlist.length;i++){
    //     if(userlist[i]===user) return true
    //   }
    //   return false
    // })

    // setFormIsValid(!validUser && validTask)

  }

  // const setUserValid=()=>{
  //     setValidUser(()=>{
  //       for (let i=0;i<userlist.length;i++){
  //         if(userlist[i]===user) return true
  //       }
  //       return false
  //     })

  // }

  //on Form submit
  const handleSubmit= async(event)=>{
    
    event.preventDefault()
    
    //API CALL

    if(validTask===false)
      dispatch(addTask(
        { data:taskname.trim(), 
          by:user,
          to:to,
          date:date,
          createdAt:new Date(),
          status:"pending"
        }
      ));
    
    clear();
  }



  return (
    <Form className='taskform'  onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Col sm={12}>
        {/* onBlur={()=>setValidTask(taskname.trim().length===0)} */}
        <Form.Control className='mb-3' size="md" type="text" placeholder="Enter the Task" value={taskname} onChange={onTasknameChange} />
        </Col>

        <Row>
        <Col sm={12}>
        <Button variant="outline-success" size="sm" type="submit" onClick={onForMeHandler}>
        For Me
      </Button>
      {validTask===true && <p>Some character needed(Whitespace is not char)</p>}
      </Col>
        <Col sm={12}>
        <Button variant="outline-info" type="button" size="sm" className='mt-3' onClick={onForOtherButton}>
        For Other
      </Button>
      </Col>

      </Row>

      {flag&&
      <>

      <Col sm={12}>
        <input className='mt-3' type="email" size="md" placeholder="Enter the Email" value={to} onChange={onUsernameChange} list="userList"/>
        <datalist id="userList">
          {
            userlist.map(user=><option value={user}>{user}</option>)
          }
        </datalist>
      </Col>
      {/* {validUser && <p>User not exist.Please select from Menu if forget Gmail of User.</p>} */}
        <Button variant="warning" type="submit" size="sm" className='mt-3'>
        Save
      </Button>
      </>
      }

      </Form.Group>
    </Form>
  )
}

export default TaskForm