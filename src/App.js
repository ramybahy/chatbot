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
        <Route index element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
