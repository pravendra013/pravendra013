

import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../../actions/auth';
import './signup.css'

const Signup = () => {
  //STATE DECLARATION
  
  const [firstName , setFirstName] = useState('')
  const [firstNameIsValid,setFirstNameIsValid] = useState()

  const [lastName, setLastName] = useState('')
  const [lastNameIsValid,setLastNameIsValid] = useState()
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [enteredConfirmPassword,setEnteredConfirmPassword] = useState('')
  const [confirmPasswordIsValid,setConfirmPasswordIsValid] = useState()

  const [securityQues,setSecurityQues] = useState("")
  const [securityAns,setSecurityAns]= useState("")

  const [formIsValid, setFormIsValid] = useState(false);



 //show password
  const [visible,setVisible] = useState(false)
  const togglePassword=()=>{
    setVisible(state=>!state)
   }

  const dispatch =useDispatch()
  const history =useHistory()
  const error = useSelector(state=>state.text)

  //Regular expression for Validation
  let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  let passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  let nameRegex = /[A-Z][a-z]*/


  //FORM INPUT CHANGE
  const firstNameChangeHandler=(event)=>{
    setFirstName(event.target.value)

    setFormIsValid(
      nameRegex.test(event.target.value) && nameRegex.test(lastName)
      && emailRegex.test(event.target.value) && passwordRegex.test(enteredPassword)
      && enteredPassword===enteredConfirmPassword 
    )
  }

  const lastNameChangeHandler=(event)=>{
    setLastName(event.target.value)

    setFormIsValid(
      nameRegex.test(event.target.value) && nameRegex.test(firstName)
      && emailRegex.test(event.target.value) && passwordRegex.test(enteredPassword)
      && enteredPassword===enteredConfirmPassword 
    )
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      emailRegex.test(event.target.value) && passwordRegex.test(enteredPassword) 
      && nameRegex.test(firstName) && nameRegex.test(lastName)
      && enteredPassword===enteredConfirmPassword 
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  
    setFormIsValid(
      passwordRegex.test(event.target.value) && emailRegex.test(enteredEmail)
      && nameRegex.test(firstName) && nameRegex.test(lastName)
      && enteredPassword===enteredConfirmPassword   
    );
  };

  const confirmPasswordChangeHandler=(event)=>{
    setEnteredConfirmPassword(event.target.value)

    setFormIsValid(
      event.target.value===enteredPassword
      && passwordRegex.test(event.target.value) && emailRegex.test(enteredEmail)
      && nameRegex.test(firstName) && nameRegex.test(lastName)
    )
  }


  //VALIDATING FORM INPUT
  const validateFirstNameHandler=()=>{
    setFirstNameIsValid(nameRegex.test(firstName))
  }

  const validateLastNameHandler=()=>{
    setLastNameIsValid(nameRegex.test(lastName))
  }

  const validateEmailHandler = () => {
    setEmailIsValid(emailRegex.test(enteredEmail));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(passwordRegex.test(enteredPassword))
  };
  
  const validateConfirmPasswordHandler=()=>{
    setConfirmPasswordIsValid(enteredPassword===enteredConfirmPassword)
  }


  //SUBMITTING FORM
  const submitHandler = (event) => {
    event.preventDefault();
     
    const formData = {
      firstName:firstName,
      lastName:lastName,
      email:enteredEmail,
      password:enteredPassword,
      question:securityQues,
      answer:securityAns
    }
    dispatch(signup(formData, history));

  };


  return (
    <form className="signupForm" action= "" onSubmit={submitHandler}>
       <div className="signup">
        <h1>SIGN UP </h1>

        <input 
          className={firstNameIsValid===false?'':''}
          type="text" 
          placeholder="First Name" 
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={validateFirstNameHandler}
          required
        />
        {firstNameIsValid===false && <p>(Alphabets only and
           First character must be Uppercase)</p>}

        <input
          className={lastNameIsValid===false?'':''} 
          type="text" 
          placeholder="Last Name"
          value={lastName}
          onChange ={lastNameChangeHandler} 
          onBlur={validateLastNameHandler}
          required
        />
        {lastNameIsValid===false && <p>(Alphabets only and 
          First character must be Uppercase)</p>}

        <input 
          className= {`emailInput ${emailIsValid===false?'':''}`} 
          type="email" 
          placeholder="Email Address" 
          value={enteredEmail} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          required
        />
        {emailIsValid===false && <p>(Please provide a properly formatted email address)</p>}

        <input 
          className={passwordIsValid===false?'':''}
          type={visible?"text":"password"}
          placeholder="Password" 
          value={enteredPassword} 
          onChange={passwordChangeHandler} 
          onBlur={validatePasswordHandler}
          required
        />
        {passwordIsValid===false
         &&
         <ul className='warning'>
         <li>Password must be 8 or more character</li>
         <li>include both lower and upper case characters</li>
         <li>include at least one number and a special character</li>
         
       </ul> }

        <input 
          className={confirmPasswordIsValid===false?'':''}
          type={visible?"text":"password"}
          placeholder="Confirm Password" 
          value={enteredConfirmPassword} 
          onChange={confirmPasswordChangeHandler} 
          onBlur={validateConfirmPasswordHandler}
          required
        />
        {confirmPasswordIsValid===false && <p>(Password and Confirm password does not match)</p>}

        <input className='box' type="checkbox" id="showPassword"  onChange={togglePassword}/>
        <label className='checkbox' for="showPassword">Show password</label>

      <div class="securityForm">
       
       
       <p className='question'>
       <select 
          className="security" 
          id="greet" 
          onChange={()=>{
                var e = document.getElementById("greet");
                // var value = e.value;
                var text = e.options[e.selectedIndex].text;
                setSecurityQues(text)
              }} 
          name="security1"
        >
          <option value="0">Select Your Security Questions</option>
          <option value="1" onClick={(event)=>console.log(event.target,event.target.value)}>What city were you born in?</option>
          <option value="2">What is your favorite book?</option>
          <option value="3">What was your favorite place to visit as a child?</option>
          <option value="4">What was the first exam you failed?</option>
          <option value="5">What was your first pet's name?</option>
       </select>
       </p>

        <input 
          type="text"
          placeholder="Answer" 
          onChange={(event)=>setSecurityAns(event.target.value)}
          />
       


      
      
    </div>

        <button className={`createbtn ${formIsValid?'valid':null}`} type="submit" disabled={!formIsValid}>Create Account</button>
        {error && <p>{error}</p>}
        <h6 className="account">Already Have an account?  <a href="/auth">Sign in!</a></h6>

       </div>
    </form>
  )
}

export default Signup