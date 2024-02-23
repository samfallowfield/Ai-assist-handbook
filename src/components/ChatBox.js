function ChatBox({ chatHistory }) {
  if (chatHistory) {
    return (
      <div id='chat-box'>
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? 'userMessage' : 'aiMessage'}
            style={{
              display: 'flex',
            }}
          >
            <p id='chat-message-bubble' style={{}}>
              {message}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default ChatBox
