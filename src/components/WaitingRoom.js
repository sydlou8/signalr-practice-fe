import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const WaitingRoom = ({ joinChatRoom }) => {
    const [username, setUsername] = useState('');
    const [chatRoom, setChatRoom] = useState('');

    return <Form onSubmit={e => {
        e.preventDefault();
        joinChatRoom(username, chatRoom);
    }}>
        <Row className= 'px-5 my-5'>
            <Col sm={12}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Username' 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Chat Room</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter chat room' 
                        value={chatRoom} 
                        onChange={e => setChatRoom(e.target.value)} 
                    />
                </Form.Group>
                <br />
            </Col>
            <Col sm={12}>
                <Button variant='success' type='submit'>Join Chat Room</Button>
            </Col>
        </Row>
        
    </Form>;
}

export default WaitingRoom;