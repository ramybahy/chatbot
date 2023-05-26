import './ChatBot.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import SideMenu from './SideMenu';
import Sentence from './Sentence';
import Results from './Results';
import { motion } from "framer-motion"

import { useState } from 'react';

function ChatBot(props) {
  const [name, setName] = useState("");
  const savedAgentsfromLocal = localStorage.getItem("savedAgents")?.replace(/'/g, '"')
  const parsedSavedAgents = savedAgentsfromLocal? JSON.parse(savedAgentsfromLocal):[]
  const [savedChat, setsavedChat] = useState(parsedSavedAgents);

  const [travel, setTravel] = useState("");
  const [agent, setAgent] = useState(false);
  const deployAgent=()=>{
    setAgent(true)
  }
  const tasks= props.tasks;
  const results= props.results;
  const saveChat=()=>{
    setsavedChat([...savedChat,name])
    localStorage.setItem("savedAgents",JSON.stringify([...savedChat,name]))
  }

  const onAnimationComplete=()=>{
  }


return (
    <div className="chat-bot">
    <div className="chat-bot__inner">
    <SideMenu savedChat={savedChat} />
    <div className="chat-bot__window">
     <h1 className="chat-bot__title">welcome to our chatbot</h1>
     <div className="chat-bot__agent-chat">
     <div className="chat-bot__chat-header">

     <p>AgentGPT</p>

     <button disabled={!agent} className={agent ?"chat-bot__save": "chat-bot__save chat-bot__save--disabled"} onClick={()=>saveChat()} >Save</button>

      </div>

    <div className="chat-bot__agent-chat-inner">
      <Sentence line = {"👉 Create an agent by adding a name / goal, and hitting deploy! Try our examples below!"} />

      {
        agent &&<>
        {
        tasks.map((task,i) =>    
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: i*1 }}
          onAnimationComplete={onAnimationComplete}>
          <Sentence key={i} line={task}/>
          </motion.div>
          )
        }

        {
        results.map((item,i) => 
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: i*1 }}>
        <Results key={i} result={item.result} taskName={item.task} />
        </motion.div>)
        }
        </>

      }
  </div>
  </div>
  <div className="chat-bot__current-tasks">
  <p>Current tasks</p>
  <div className="chat-bot__current-tasks-inner">
    {
      agent?  
        tasks.map((task,i) =>    
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: i*1 }}>
          <Sentence key={i} type={"current task"}  line={task}/>
          </motion.div>
          ) :<p>This window will display agent tasks as they are created.</p>
    }
  </div>
  </div>

      <div className="chat-bot__field">
<label className="chat-bot__label">Name</label>
<input placeholder=" AgentGPT"type="text" onChange={(e)=>setName(e.target.value)} className="chat-bot__input"/>
      </div>
      <div className="chat-bot__field">
<label className="chat-bot__label">Travel Plan</label>
<input placeholder=" What's your getaway plan?"type="text" onChange={(e)=>setTravel(e.target.value)} className="chat-bot__input"/>
      </div>
      <button onClick={(e)=>deployAgent()} disabled={name==="" || travel ===""} className={name==="" || travel ==="" ? "chat-bot__deploy chat-bot__deploy--disabled" :"chat-bot__deploy "} > Deploy Agent</button>
    </div>
    </div>

    </div>
  );
}

export default ChatBot;
