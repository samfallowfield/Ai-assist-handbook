import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ChatBox from "./components/ChatBox";

function App() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChathistory] = useState([]);

  useEffect(() => {
    setChathistory((prevChatHistory) => [...prevChatHistory, userMessage]);
  }, [userMessage]);

  // whatever parameter you pass to setChathistory will be equal to the value of chatHistory
  // if we just gave it a value it would add that value to the array, but if we give it a parameter, the parameter is always the current state of chat history

  useEffect(() => {
    console.log(chatHistory);
  }, [chatHistory]);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Chat-body">
        <ChatBox chatHistory={chatHistory} />
        <InputForm setUserMessage={setUserMessage} />
      </div>
    </div>
  );
}

export default App;
