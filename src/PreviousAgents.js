import './PreviousAgents.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";

function PreviousAgents() {

  return (
    <div className="previous-agent">
      <p>My Agents</p>
     <p>You need to create and save your first agent before anything shows up here!</p>
    </div>

  );
}

export default PreviousAgents;
