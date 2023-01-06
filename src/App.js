import React,{useEffect,useState} from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
import Headers from './components/Headers/headers';
import AddTask from './pages/AddTask';
import AssignedTask from './pages/AssignedTask';
import AssignTask from './pages/AssignTask';
import PersonalTask from './pages/PersonalTask';
import { Error } from './components/Error/Error';

import Home from './components/Home/Home';
import SignIn from './components/Auth/Signin/Signin'
import SignUp from './components/Auth/Signup/signup'
import { useSelector } from 'react-redux';
import ForgetPassword from './components/Change Password/ForgetPassword';
import NewPassword from './components/Change Password/NewPassword';


const App=()=> {

  // useEffect(() => {
  // }, [useSelector(state=>state.user)])
  
  // const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')))
  // var user = JSON.parse(localStorage.getItem('profile'));
  var user = useSelector(state=>state.auth.authData)
  // useEffect(()=>{ 
  //     user = JSON.parse(localStorage.getItem('profile'));

  // },[user])
  
  
  return (
      <BrowserRouter>
      {/* <Container> */}
      
          <Headers/>
          <Switch>
            <Route path="/" exact component= {() => (user ?<Redirect to="/tasks" /> :<Home />  )}/>
            <Route path="/auth" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/forgetpassword" exact component={ForgetPassword}/>
            <Route path="/newpassword" exact component={NewPassword}/>
            <Route path='/tasks' exact component={() => (!user ? <SignIn /> : <AddTask/>)} />
            <Route path='/personaltask' exact component={() => (!user ? <SignIn /> : <PersonalTask/>)}/>
            <Route path='/assigntask' exact component={() => (!user ? <SignIn /> : <AssignTask/>)}/>
            <Route path='/assignedtask' exact component={() => (!user ? <SignIn /> : <AssignedTask/>)}/>
            <Route path='*' exact component={Error}/>
          </Switch>
          {/* </Container> */}
      </BrowserRouter>
  );
}

export default App;
