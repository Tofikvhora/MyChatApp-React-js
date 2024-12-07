import { Col, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WaitingRoom from "./Components/WaitingRoom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import ChatRoom from "./Components/ChatRoom";

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessage] = useState();

  const joinChatRoom = async (userName, chatRoom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7133/chat")
        .configureLogging(LogLevel.Information)
        .build();
      // seting up handler
      conn.on("JoinedSpecificChatRoom", (username, msg) => {
        console.log("msg : ", msg) ;
        console.log("Message Function is called.......");
        setMessage(message => [...(message || []), { msg,username  }]); 
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        console.log("Message Function is called.......");
        setMessage(message => [...(message || []), { msg, username }]); 
      });
      await conn.start();
      await conn.invoke("JoinedSpecificChatRoom", { userName, chatRoom });
      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };


  const sendMessage = async(message) => {
    try {
      await conn.invoke("SendMessage",message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <main>
       
        {!conn ? 
          <WaitingRoom joinChatRoom={joinChatRoom} />
         : 
          <ChatRoom messages={messages} sendMessage={sendMessage} />
        }
      </main>
    </div>
  );
}

export default App;
