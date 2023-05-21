import './SignIn.scss';
import { NavLink } from "react-router-dom";

function SignIn() {
  return (
    <div className="sign-in">
      <p className="sign-in__title">sign in</p>
    <input className="sign-in__input" placeholder="Enter your email" type="email" name="email"/>
    <input className="sign-in__input" placeholder="Enter your password" type="password" name="password"/>
     <button className='sign-in__submit'>Submit</button>
     {/* <p>don't Have an Account? < NavLink to="/signup"> signup</NavLink></p> */}
    </div>
  );
}

export default SignIn;
