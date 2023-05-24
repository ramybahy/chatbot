import logo from './logo.svg';
import './App.scss';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ChatBot from './ChatBot';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/chatbot" element={<SignUp />}/>
        <Route path="/chatbot/signin" element={<SignIn />} />
        <Route path="/chatbot/chatwindow" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
