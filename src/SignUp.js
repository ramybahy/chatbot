import './SignUp.scss';
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div className="sign-up">
      <p className="sign-up__title">sign up</p>
    <input className="sign-up__input" placeholder="Enter your name" type="text" name="name"/>
    <input className="sign-up__input" placeholder="Enter your email" type="email" name="email"/>
    <input className="sign-up__input" placeholder="Enter your password" type="password" name="password"/>
     <button className='sign-up__submit'>Submit</button>
     {/* <p>Already Have an Account? < NavLink to="/signin"> signin</NavLink></p> */}
    </div>
  );
}

export default SignUp;
