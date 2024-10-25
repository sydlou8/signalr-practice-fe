import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WaitingRoom from './components/WaitingRoom';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


function App() {
  const [connection, setConnection] = useState(null);
  const joinChatRoom = async (username, chatRoom) => {
    try {
      // initiate connection
      const connection = new HubConnectionBuilder()
        .withUrl('http://localhost:5215/Chat')
        .configureLogging(LogLevel.Information)
        .build();

      // set up handlers
      connection.on('JoinSpecificChatRoom', (username, message) => {
        console.log("message: ", message);
      });

      await connection.start();
      await connection.invoke('JoinSpecificChatRoom', {username, chatRoom});

      setConnection(connection);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
            <h1 className='font-weight-light'>Welcome to Fxst</h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom}/>
        </Container>
      </main>
    </div>
  );
}

export default App;
