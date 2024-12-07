import { useState } from "react";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { BsFillChatDotsFill } from "react-icons/bs";

const WaitingRoom = ({ joinChatRoom }) => {
  const [userName, setUser] = useState("");
  const [chatroom, setChatRoom] = useState("");

  return (
    <div className="waiting-room">
      <Card className="shadow-lg waiting-room-card">
        <Card.Body>
          <div className="text-center">
            <BsFillChatDotsFill size={50} className="chat-icon" />
            <h2 className="mb-4">Welcome to My ChatApp</h2>
            <p className="mb-5 text-muted">
              Enter your username and the chatroom you'd like to join.
            </p>
          </div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              joinChatRoom(userName, chatroom);
            }}
          >
            <Row className="mb-4">
              <Col sm={12}>
                <Form.Group>
                  <Form.Control
                    className="form-input"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={12}>
                <Form.Group>
                  <Form.Control
                    className="form-input"
                    placeholder="Enter chatroom name"
                    value={chatroom}
                    onChange={(e) => setChatRoom(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                variant="success"
                type="submit"
                className="join-btn"
                disabled={!userName || !chatroom}
              >
                Join Chat Room
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WaitingRoom;
