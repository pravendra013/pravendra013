import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,useHistory } from 'react-router-dom';
import { useState, useEffect} from 'react';
import menu from '../../assets/icons/menu.svg'
import cross from '../../assets/icons/cross.svg';

import decode from 'jwt-decode';
import './headers.css'
import { assignedTask, assignTask, personalTask } from '../../actions/tasks';
import { logOut } from '../../actions/auth';
import mmLogo from '../../images/logoMM.png';
import { userList } from '../../actions/userList';

const Headers = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const username = useSelector(state=>state.user.name)
  const data = {email:useSelector(state=>state.user.email),
                date:useSelector(state=>state.date)}

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  //ON TASK FORM CLICK
  const taskFormHandler=()=>{
    dispatch(userList(history))
  }

  //ON PERSONAL TASK CLICK
  const personalTaskHandler=()=>{
    dispatch(personalTask(history,data))
  }

  //ON ASSIGN TASK CLICK
  const assignTaskHandler=()=>{
    dispatch(assignTask(history,data))
  }

  //ON ASSIGNED TASK CLICK
  const assignedTaskHandler=()=>{
    dispatch(assignedTask(history,data))
  }
 

  //LOGOUT 
  const logout = () => {

    dispatch(logOut())
    history.push('/auth');
    setUser(null);

  };

  //SIGN IN BUTTON 
  const signInHandler=()=>{
    history.push('/auth');
  }

  useEffect(() => {
    const token = user;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  
  
  function showMenu() {
    const navLinks = document.getElementById("navLinks");
      navLinks.style.right = "0";
  }

  function hideMenu() {
    const navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-200px";
  }
   
  return (
    <section className="sub-header">
        <nav>
            <img className='logo' src={mmLogo} alt="MetaMix"/>
            <p className='title'>To Do</p>
            
            <div className="nav-links" id="navLinks">
              <button className='hideBtn' onClick={hideMenu}><img className='crossicon' src={cross} alt="cross"></img></button>
                {/* <i class="fa fa-times" aria-hidden="true" onClick={hideMenu}></i> */}
                {/* <i class="fa fa-times" onClick={hideMenu}></i> */}
                {/* <Icon className='fa fa-times' onClick={hideMenu}>add_circle</Icon> */}
                {/* <i class="fa-solid fa-house"></i> */}
                <ul>
                    {user?(
                      <>
                        <li><button className='headerBtn A' href="/taskform" onClick={taskFormHandler} >Task Form</button></li>
                        <li><button className='headerBtn A' href="/personaltask" onClick={personalTaskHandler} >Personal Task</button></li>
                        <li><button className='headerBtn A' href="/assignedtask" onClick={assignedTaskHandler} >Task for Me</button></li>
                        <li><button className='headerBtn A' href="/assigntask" onClick={assignTaskHandler}>Task for Other</button></li>
                        <li className='username'><p>{username}</p></li>
                      </>
                      ):(null)
                    }
                    {!user?(<> <button onClick={signInHandler} className='InBtn'>Sign In</button></>):(<> <button className='OutBtn' onClick={logout}>Log Out</button></>)}
                    
                </ul>
            </div>
           {/* <i className='fa fa-bars' onClick={showMenu}></i> */}
           <button className='showBtn' onClick={showMenu}><img className='menuicon' src={menu} alt="menu"></img></button>
        </nav>

    </section>
  )
}

export default Headers