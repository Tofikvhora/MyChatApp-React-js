const MessageConatiner = ({ messages = [] }) => {
    return (
      <div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.username === "You" ? "message-user" : "message-other"
            }`}
          >
            <strong>{msg.username}:</strong> {msg.msg}
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageConatiner;
  