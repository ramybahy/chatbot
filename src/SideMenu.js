import './SideMenu.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import { useNavigate } from "react-router-dom";
import PreviousAgents from './PreviousAgents';

function SideMenu() {
  const navigate = useNavigate();

  const handleSignOut=()=>{
    localStorage.removeItem("signUp")
    navigate("/chatbot/signin");
  }
  return (
    <div className="side-menu">
      <PreviousAgents/>
      <button className="side-menu__signout" onClick={handleSignOut}>Sign Out</button>
     
    </div>

  );
}

export default SideMenu;
