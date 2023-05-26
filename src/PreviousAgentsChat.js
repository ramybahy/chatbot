import './PreviousAgentsChat.scss';
import React from "react";
import Sentence from './Sentence';
import Results from './Results';
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

function PreviousAgentsChat(props) {
const tasks= props.tasks;
const results= props.results;
const navigate = useNavigate();

  return (
    <div className="previous-chat">
      <button onClick={()=>  navigate("/chatbot/chatwindow")} className="previous-chat__back-button">back</button>
    <div className="previous-chat__inner">

      <div className="chat-bot__agent-chat">
        <div className="chat-bot__agent-chat-inner">
          {
          tasks.map((task,i) =>    
            <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: i*1 }}
          >
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
          </div>
      </div>
    </div>
    </div>

  );
}

export default PreviousAgentsChat;
