import './ChatBot.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import SideMenu from './SideMenu';
import Sentence from './Sentence';
import Results from './Results';
import { motion } from "framer-motion"

import { useState } from 'react';

function ChatBot() {
  const [name, setName] = useState("");
  const [travel, setTravel] = useState("");
  const [agent, setAgent] = useState(false);
  const handleClick=()=>{
    setAgent(true)
  }
  const tasks=["Research and select the dates for the trip and book flights to Hawaii"
,"Choose accommodations based on budget and preferences and make reservations.",
"Plan activities and tours to do while in Hawaii."
]
const results=[{
  task:"completed:Research and select the dates for the trip and book flights to Hawaii",
result:"The best time to visit Hawaii is between April to October as the accommodation rates are reasonable and the weather is warm. Late November through mid-December is the best time to find good bargains on cruises. Spring and fall shoulder seasons are ideal to get great deals on trips. Purchase flight tickets 40-50 days prior to the travel date for the best rates.",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]
},
{
  task:"completed:Research and select the dates for the trip and book flights to Hawaii",
result:"If you're interested in history, be sure to make a stop at the Pearl Harbor National Memorial, which offers a glimpse into Hawaii's past and is a budget-friendly option for a day trip.",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]},
{
  task:"completed:Research and select the dates for the trip and book flights to Hawaii",
result:"Overall, with a bit of planning and some smart choices, it's definitely possible to enjoy an affordable and enjoyable trip to Hawaii. Choose the options that work best for your budget and preferences, and get ready for a memorable vacation in paradise!",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]}
]


  return (
    <div className="chat-bot">
    <div className="chat-bot__inner">

    <SideMenu/>

    <div className="chat-bot__window">
     <h1 className="chat-bot__title">welcome to our chatbot</h1>
     <div className="chat-bot__agent-chat">
     <div className="chat-bot__chat-header">
     <p>AgentGPT</p>
     <button className="chat-bot__save">Save</button>
      </div>
    <div className="chat-bot__agent-chat-inner">
      <Sentence line = {"👉 Create an agent by adding a name / goal, and hitting deploy! Try our examples below!"} />

      {
        agent &&<>
        {
        tasks.map((task,i) =>    
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: i*1 }}>
          <Sentence key={i} line={task}/>
          </motion.div>
          )
        }

        {
        results.map((item,i) => 
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: i*1 }}>
        <Results result={item.result} taskName={item.task} />
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
      <button onClick={(e)=>handleClick()} disabled={name==="" || travel ===""} className={name==="" || travel ==="" ? "chat-bot__deploy chat-bot__deploy--disabled" :"chat-bot__deploy "} > Deploy Agent</button>
    </div>
    </div>

    </div>
  );
}

export default ChatBot;
