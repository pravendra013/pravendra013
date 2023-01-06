import React from "react";
import {Alert,Button} from 'react-bootstrap'
import { useState } from "react";
import './home.css'
import apple from '../../assets/icons/apple.svg'
import play from '../../assets/icons/play.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-solid-svg-icons'

const Home=()=>{
    return(
        <div>
        <p className="about">
        To-do lists offer a way to increase productivity, stopping you from
         forgetting things, helps prioritise tasks, manage tasks effectively, 
         use time wisely and improve time management as well as workflow.
         One of the most important reasons you should use a to do list is that 
         it will help you stay organised. When you write all your tasks in a list,
         they seem more manageable. When you've got a clear outline of the tasks
         you've got to do and those you've completed, it helps you stay focused.
         While freeing up space in your mind for other more creative tasks.
         const element 
        </p>
        <div className="downloadbtn">
          <button className="playstore">
          <img className="brandicon" src={play} alt="PLAY" width={35}></img>
          <span className="brandtext">
           Download
          </span>
          </button>
          <button className="apple">
          <img className="brandicon" src={apple} alt="SVG" width={35}></img>
          <span className="brandtext">
          Download
          </span>
           
          </button>
        </div>

        <hr />
        <div className="d-flex justify-content-center">
        </div>
        </div>
    )
}

export default Home;