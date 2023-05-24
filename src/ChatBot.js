import './ChatBot.scss';
import { NavLink } from "react-router-dom";
import React, { useRef  } from "react";
import SideMenu from './SideMenu';
import Sentence from './Sentence';

import { useState } from 'react';

function ChatBot() {
  const [name, setName] = useState("");
  const [travel, setTravel] = useState("");
  const tasks=["Added task:Research and select the dates for the trip and book flights to Hawaii"
,"Added task:Choose accommodations based on budget and preferences and make reservations.",
"Added task:Plan activities and tours to do while in Hawaii."
]
const results=[{
  task:"Added task:Research and select the dates for the trip and book flights to Hawaii",
result:"The best time to visit Hawaii is between April to October as the accommodation rates are reasonable and the weather is warm. Late November through mid-December is the best time to find good bargains on cruises. Spring and fall shoulder seasons are ideal to get great deals on trips. Purchase flight tickets 40-50 days prior to the travel date for the best rates.",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]
},
{
  task:"Added task:Research and select the dates for the trip and book flights to Hawaii",
result:"The best time to visit Hawaii is between April to October as the accommodation rates are reasonable and the weather is warm. Late November through mid-December is the best time to find good bargains on cruises. Spring and fall shoulder seasons are ideal to get great deals on trips. Purchase flight tickets 40-50 days prior to the travel date for the best rates.",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]},
{
  task:"Added task:Research and select the dates for the trip and book flights to Hawaii",
result:"The best time to visit Hawaii is between April to October as the accommodation rates are reasonable and the weather is warm. Late November through mid-December is the best time to find good bargains on cruises. Spring and fall shoulder seasons are ideal to get great deals on trips. Purchase flight tickets 40-50 days prior to the travel date for the best rates.",
Links:["https://www.budgetdirect.com.au/interactives/best-time-to-visit/hawaii/"]}
]

  return (
    <div className="chat-bot">
    <div className="chat-bot__inner">

    <SideMenu/>

    <div className="chat-bot__window">
     <h1 className="chat-bot__title">welcome to our chatbot</h1>
    <div className="chat-bot__agent-chat">
<Sentence line = {  "  👉 Create an agent by adding a name / goal, and hitting deploy! Try our examples below!"} />
  </div>
    <div className="chat-bot__current-tasks">
<p>Current tasks</p>
<p>This window will display agent tasks as they are created.</p>
      </div>
      <div className="chat-bot__field">
<label className="chat-bot__label">Name</label>
<input placeholder=" AgentGPT"type="text" onChange={(e)=>setName(e.target.value)} className="chat-bot__input"/>
      </div>
      <div className="chat-bot__field">
<label className="chat-bot__label">Travel Plan</label>
<input placeholder=" What's your getaway plan?"type="text" onChange={(e)=>setTravel(e.target.value)} className="chat-bot__input"/>
      </div>
      <button disabled={name==="" || travel ===""} className={name==="" || travel ==="" ? "chat-bot__deploy chat-bot__deploy--disabled" :"chat-bot__deploy "} > Deploy Agent</button>
    </div>
    </div>

    </div>
  );
}

export default ChatBot;
