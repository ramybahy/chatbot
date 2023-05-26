import './PreviousAgents.scss';
import React from "react";
import { useNavigate } from "react-router-dom";

function PreviousAgents(props) {
  const navigate = useNavigate();
const savedChat= props.savedChat;
const showPreviousChat=()=> {
  navigate("/chatbot/previous-agent-chat");
}
  return (
    <div className="previous-agent">
      <p>My Agents</p>
     { savedChat.length>0 ?
     savedChat.map((agentName,i)=>
     <button className="previous-agent__button" onClick={()=>showPreviousChat()} key={i}>{agentName} </button>
     
     )
      : <p>You need to create and save your first agent before anything shows up here!</p>}
    </div>

  );
}

export default PreviousAgents;
