
import * as api from '../api/index.js';
import { userList } from './userList.js';


export const signin = (formData, router) => async (dispatch) => {

  try {

    const { data } = await api.signIn(formData);
    
    //store token in redux and localstorage
    dispatch({ type: "AUTH", payLoad: data?.token });

    //store user detail in userReducer
    dispatch({type:"SIGNIN_USER",payLoad:data?.result})

    //navigate to addtask page
    console.log("GOING TO TASK FORM FROM AFTER")


    setTimeout(()=>{
          //Dispatch for userlist
        dispatch(userList(router))
    },0)
    

  } catch (error) {
      console.log(error.response)
      dispatch({type:"SIGNIN_ERROR_MESSAGE",payLoad:error.response.data.message})
  }
}

export const signup = (formData, router) => async (dispatch) => {
  try {

    //api call
    const { data } = await api.signUp(formData);

    //Dispatch for userlist
    dispatch(userList(router))
    
    //auth reducer
    dispatch({ type: "AUTH", payLoad:data?.token });

    //user reducer
    dispatch({type:"SIGN_UP" ,payLoad:formData})

    //navigate to add task
    router.push('/tasks');

  } catch (error) {
      console.log(error);
      dispatch({type: "SIGNUP_ERROR_MESSAGE",payLoad:error.response.data.message})
  }
};

export const logOut=()=>async (dispatch)=>{

  //Local Storage Clear and redux auth
  dispatch({type:"LOGOUT"})

  //clear userList
  dispatch({type:"CLEAR_USERLIST"})

  //clear user detail 
  dispatch({type:"LOGOUT_USER"})

  //clear tasklist
  dispatch({type:"LOGOUT_TASK"})

  //Reset Date
  dispatch({type:"LOGOUT_DATE"})
}