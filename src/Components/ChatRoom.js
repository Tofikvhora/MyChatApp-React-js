import { Col, Row } from "react-bootstrap";
import { BsChatSquareText } from "react-icons/bs"; // Add an icon for decoration
import MessageConatiner from "./MessageConatiner";
import SendMessageForm from "./SendMessageForm";

const ChatRoom = ({ messages, sendMessage }) => {
  console.log("Chatroom messages:", messages);

  return (
    <div className="chat-room">
      {/* Enhanced Chat Room Header */}
      <header className="chat-room-header">
        <Row className="align-items-center">
          <Col xs={2} className="text-center">
            <BsChatSquareText size={40} className="header-icon" />
          </Col>
          <Col xs={10}>
            <h1 className="header-title">Welcome to My ChatApp</h1>
            <p className="header-subtitle">Chat, connect, and share your thoughts!</p>
          </Col>
        </Row>
      </header>

      {/* Chat Room Content */}
      <Row className="chat-room-content">
        <Col sm={12}>
          <MessageConatiner messages={messages || []} />
        </Col>
      </Row>

      {/* Fixed Send Message Form */}
      <Row className="fixed-form-container">
        <Col sm={12}>
          <SendMessageForm sendMessage={sendMessage} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
