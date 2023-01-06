
import * as api from '../api/index.js';
 

//NEW TASK ADDED
export const addTask = (post) => async (dispatch) => {
  try {
    //api call to put in DB
    await api.addTask(post);

  } catch (error) {
    console.log(error);
  }
};

//GET PERSONAL TASK
export const personalTask= (router,userDetail)=>async(dispatch)=>{
  try {
    
     console.log(userDetail)
    //api call
    const task = await api.personalTask(userDetail)
    
    //save to redux
    dispatch({type:"PERSONAL_TASK", payLoad:task.data})
    router.push('/personaltask')

  } catch (error) {
    console.log(error)
  }
}

//GET ASSIGNED TASK
export const assignedTask= (router,email)=>async(dispatch)=>{
  try {
     
    //api call
    const task = await api.assignedTask(email)

    //save to redux
    dispatch({type:"ASSIGNED_TASK", payLoad:task.data})
    router.push('/assignedtask')

  } catch (error) {
    console.log(error)
  }
}

//GET ASSIGN TASK
export const assignTask= (router,email)=>async(dispatch)=>{
  try {
     
    //api call
    const task = await api.assignTask(email)
  
    //save to redux
    dispatch({type:"ASSIGN_TASK", payLoad:task.data})
    router.push('/assigntask')

  } catch (error) {
    console.log(error)
  }
}


//TOGGLE TASK BETWEEN:ACTIVE,PENDING,DONE & DELETE
export const toggleTasks=(id,status)=>async(dispatch)=>{
  try {
    console.log(id,status)
    console.log("TASK TOGGLE")
    await api.toggleTask({id:id,status:status})
    console.log("After api call");

    dispatch({type:"TOGGLE",payLoad:{id:id,status:status}})
    
  } catch (error) {
    console.log(error)
  }
  
}

//TOGGLE TASK BETWEEN:ACTIVE,PENDING,DONE & DELETE
export const changeTask=(id,text)=>async(dispatch)=>{
  try {
    console.log(id,text)
    dispatch({type:"EDIT_TASK",payLoad:{id:id,text:text}})
    await api.changeTask({id:id,text:text})

    
    
  } catch (error) {
    console.log(error)
  }
}