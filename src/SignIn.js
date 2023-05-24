import './SignIn.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const email=useRef()
  const password=useRef()
  const navigate = useNavigate();

   const localEmail=localStorage.getItem("email")
   const localPassword=localStorage.getItem("password")

  const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        navigate("/chatbot/chatwindow");
    }else{
//show message to the user that credentials are not valid
    }
   }
  return (
    <form className="sign-in">
      <p className="sign-in__title">sign in</p>
    <input className="sign-in__input" placeholder="Enter your email" type="email" name="email"ref={email}/>
    <input className="sign-in__input" placeholder="Enter your password" type="password" name="password" ref={password}/>
     <button type="submit" className='sign-in__submit' onClick={handleSignIn} >Submit</button>
     <p>don't Have an Account? < NavLink to="/chatbot"> signup</NavLink></p>
    </form>
  );
}

export default SignIn;
