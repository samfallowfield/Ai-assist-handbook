import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import ChatBox from './components/ChatBox'
import preprompt from './data/preprompts'

function App() {
  const [userMessage, setUserMessage] = useState('')
  const [chatHistory, setChathistory] = useState([])

  useEffect(() => {
    if (userMessage) {
      setChathistory((prevChatHistory) => [...prevChatHistory, userMessage])
      // Set up the headers required by the OpenAI API
      const config = {
        'Content-Type': 'application/json',
      }

      // Define the payload for the API call
      const payload = {
        messages: [
          { role: 'system', content: preprompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: -1,
        stream: false,
      }

      // Make the API call to OpenAI's completion endpoint
      axios({
        method: 'post',
        url: 'http://localhost:1234/v1/chat/completions',
        data: payload,
        headers: config,
      })
        .then((response) => {
          // Handle the response from the API
          setChathistory((prevChatHistory) => [
            ...prevChatHistory,
            response.data.choices[0].message.content,
          ])

          console.log(response.data.choices[0].message.content)
        })
        .catch((error) => {
          // Handle any errors from the API call
          console.error(error)
        })
    }
  }, [userMessage])

  // whatever parameter you pass to setChathistory will be equal to the value of chatHistory
  // if we just gave it a value it would add that value to the array, but if we give it a parameter, the parameter is always the current state of chat history

  useEffect(() => {
    console.log(chatHistory)
  }, [chatHistory])

  return (
    <div className='App'>
      <div className='Header'>
        <Header />
      </div>
      <div className='Chat-body'>
        <ChatBox chatHistory={chatHistory} />
        <InputForm setUserMessage={setUserMessage} />
      </div>
    </div>
  )
}

export default App
