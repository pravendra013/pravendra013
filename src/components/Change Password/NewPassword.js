import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changePassword } from '../../api'
import './new.css'

const NewPassword = () => {
  const [visible,setVisible] = useState(false)

  const [password,setPassword] =useState("")
  const [confirmPassword,setConfirmPassword] =useState("")
  const [submit,setSubmit] = useState(false)
  const email= useSelector(state=>state.auth.email)
  const dispatch= useDispatch()
  const history =useHistory()

  // useEffect(()=>{

  //   return(()=>{dispatch({type:"LOGOUT"})})
  // },[submit])

  const togglePassword=()=>{
    setVisible(state=>!state)
  }

  const sendNewPassword=async()=>{
    const data={
      password:password,
      email:email
    }

    try {
      console.log(data);
      await changePassword(data)
      console.log("LOGOUT");
      dispatch({type:"LOGOUT"})
      history.push('/auth')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action="" >
    <div className="mainContainer">
      <h1>Reset Password</h1>

     

        <input
          class="Newpass" 
          type={visible?"text":"password"} 
          style={{fontSize: (visible?15:null)}}
          placeholder="Enter New Password" 
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        <ul class='warning'>
          <li>Password must be 8 or more character</li>
          <li>include both lower and upper case characters</li>
          <li>include at least one number and a special character</li>
        </ul>
         
        <input   
          class="Confirmpass" 
          type={visible?"text":"password"} 
          placeholder="Confirm Password "
          onChange={(e)=>{setConfirmPassword(e.target.value)}}
        />

        <li class="war" >password did not matched</li> 

         <input className='box' type="checkbox" id="showPassword"  onChange={togglePassword}/>
         <label className='checkbox' for="showPassword">Show password</label>
        
        <button class="submitBtn" type="button" onClick={sendNewPassword}>SUBMIT</button>

    </div>
 
  </form>
  )
}

export default NewPassword