import './SignUp.scss';
import { NavLink } from "react-router-dom";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const navigate = useNavigate();

  const handleSignUp=()=>{
      if(name.current.value&&email.current.value&&password.current.value)
     {
       localStorage.setItem("name",name.current.value)
       localStorage.setItem("email",email.current.value)
       localStorage.setItem("password",password.current.value)
       localStorage.setItem("signUp",email.current.value)
       navigate("/chatbot");
      }
  } 
  return (
    <div className="sign-up">
      <p className="sign-up__title">sign up</p>
    <input className="sign-up__input" placeholder="Enter your name" type="text" name="name" ref={name}/>
    <input className="sign-up__input" placeholder="Enter your email" type="email" name="email" ref={email}/>
    <input className="sign-up__input" placeholder="Enter your password" type="password" name="password" ref={password}/>
     <button className='sign-up__submit' onClick={handleSignUp}>Submit</button>
     <p>Already Have an Account? < NavLink to="/signin"> signin</NavLink></p>
    </div>
  );
}

export default SignUp;
