function ChatBox({ chatHistory }) {
  if (chatHistory) {
    return (
      <div id="chat-box">
        {chatHistory.map((message, index) => (
          <p
            id="chat-message-bubble"
            key={index}
            style={{ textAlign: index % 2 === 0 ? "left" : "right" }}
          >
            {message}
          </p>
        ))}
      </div>
    );
  }
}

export default ChatBox;
