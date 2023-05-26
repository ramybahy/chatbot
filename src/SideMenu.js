import './SideMenu.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import { useNavigate } from "react-router-dom";
import PreviousAgents from './PreviousAgents';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { motion } from "framer-motion"

function SideMenu(props) {
  const navigate = useNavigate();
  const [openMenu, setopenMenu] = useState(false);
const savedChat= props.savedChat;

  const handleSignOut=()=>{
    localStorage.removeItem("signUp")
    navigate("/chatbot/signin");
  }
  return (
    <motion.div style={{"minHeight":"100vh", position: "absolute", display: "flex","backgroundColor": `${openMenu? "#18181b":"transparent"}`}} layout transition={{ duration: 0.3 }} >
    {openMenu ? (
          <div className="side-menu">
          <PreviousAgents savedChat={savedChat}/>
          <button className="side-menu__signout" onClick={handleSignOut}>Sign Out</button>
         
        </div>
  ) : (
    ""
  )}

    <Hamburger  className="chat-bot__menu-button" color="#fff" toggled={openMenu} toggle={()=>setopenMenu(!openMenu)} />

    </motion.div>

  );
}

export default SideMenu;
