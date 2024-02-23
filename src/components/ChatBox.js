function ChatBox({ chatHistory }) {
  if (chatHistory) {
    return (
      <div id='chat-box'>
        {chatHistory.map((message, index) => (
          <div
            className={index % 2 === 0 ? 'userMessage' : 'aiMessage'}
            style={{
              display: 'flex',
            }}
          >
            <p id='chat-message-bubble' key={index} style={{}}>
              {message}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default ChatBox
