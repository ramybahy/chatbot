import logo from './logo.svg';
import './App.scss';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ChatBot from './ChatBot';
import PreviousAgentsChat from './PreviousAgentsChat';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/chatbot" element={<SignUp />}/>
        <Route path="/chatbot/signin" element={<SignIn />} />
        <Route path="/chatbot/chatwindow" element={<ChatBot tasks={tasks} results={results} />} />
        <Route path="/chatbot/previous-agent-chat" element={<PreviousAgentsChat tasks={tasks} results={results}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
